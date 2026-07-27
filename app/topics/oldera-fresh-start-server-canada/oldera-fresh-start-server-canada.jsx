import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-fresh-start-server-canada');
}

export default function OlderaFreshStartServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="oldera-fresh-start-server-canada" />;
}
