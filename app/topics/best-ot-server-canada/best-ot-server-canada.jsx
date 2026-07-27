import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-ot-server-canada');
}

export default function BestOtServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="best-ot-server-canada" />;
}
