import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-yurots-discord');
}

export default function TopYurotsDiscordKeywordPage() {
  return <StaticKeywordPage slug="top-yurots-discord" />;
}
