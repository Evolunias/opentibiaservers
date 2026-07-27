import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-oldera-ot-server');
}

export default function TopOlderaOtServerKeywordPage() {
  return <StaticKeywordPage slug="top-oldera-ot-server" />;
}
