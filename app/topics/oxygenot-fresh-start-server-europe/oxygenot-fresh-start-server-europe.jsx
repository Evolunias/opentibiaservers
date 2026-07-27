import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-fresh-start-server-europe');
}

export default function OxygenotFreshStartServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-fresh-start-server-europe" />;
}
