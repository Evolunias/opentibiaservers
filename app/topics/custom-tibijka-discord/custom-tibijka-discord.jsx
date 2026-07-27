import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-tibijka-discord');
}

export default function CustomTibijkaDiscordKeywordPage() {
  return <StaticKeywordPage slug="custom-tibijka-discord" />;
}
