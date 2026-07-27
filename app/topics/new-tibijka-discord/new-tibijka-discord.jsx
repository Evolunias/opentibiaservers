import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-tibijka-discord');
}

export default function NewTibijkaDiscordKeywordPage() {
  return <StaticKeywordPage slug="new-tibijka-discord" />;
}
