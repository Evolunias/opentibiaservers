import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-fresh-start-server-canada');
}

export default function AlasteraFreshStartServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="alastera-fresh-start-server-canada" />;
}
