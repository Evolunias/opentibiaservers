import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-neprenia-ot-server');
}

export default function BestNepreniaOtServerKeywordPage() {
  return <StaticKeywordPage slug="best-neprenia-ot-server" />;
}
