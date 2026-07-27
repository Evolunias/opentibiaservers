import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-fresh-start-server-uk');
}

export default function ShadowcoresFreshStartServerUkKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-fresh-start-server-uk" />;
}
