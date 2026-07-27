import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-fresh-start-server-europe');
}

export default function ShadowcoresFreshStartServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-fresh-start-server-europe" />;
}
