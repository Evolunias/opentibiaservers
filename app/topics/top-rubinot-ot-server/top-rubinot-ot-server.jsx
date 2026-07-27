import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-rubinot-ot-server');
}

export default function TopRubinotOtServerKeywordPage() {
  return <StaticKeywordPage slug="top-rubinot-ot-server" />;
}
