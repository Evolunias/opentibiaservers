import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-tibijka-discord');
}

export default function ActiveTibijkaDiscordKeywordPage() {
  return <StaticKeywordPage slug="active-tibijka-discord" />;
}
