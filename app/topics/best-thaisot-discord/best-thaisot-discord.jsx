import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-thaisot-discord');
}

export default function BestThaisotDiscordKeywordPage() {
  return <StaticKeywordPage slug="best-thaisot-discord" />;
}
