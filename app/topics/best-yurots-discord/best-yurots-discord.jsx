import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-yurots-discord');
}

export default function BestYurotsDiscordKeywordPage() {
  return <StaticKeywordPage slug="best-yurots-discord" />;
}
