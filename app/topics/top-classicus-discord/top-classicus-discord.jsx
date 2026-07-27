import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-classicus-discord');
}

export default function TopClassicusDiscordKeywordPage() {
  return <StaticKeywordPage slug="top-classicus-discord" />;
}
