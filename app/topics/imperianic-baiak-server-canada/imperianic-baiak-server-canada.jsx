import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-baiak-server-canada');
}

export default function ImperianicBaiakServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="imperianic-baiak-server-canada" />;
}
