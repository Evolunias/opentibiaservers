import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-fresh-start-server-canada');
}

export default function TibiantisFreshStartServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-fresh-start-server-canada" />;
}
