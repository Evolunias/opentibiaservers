import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-classicus-discord');
}

export default function CurrentClassicusDiscordKeywordPage() {
  return <StaticKeywordPage slug="current-classicus-discord" />;
}
