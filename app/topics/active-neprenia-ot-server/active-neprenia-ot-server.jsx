import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-neprenia-ot-server');
}

export default function ActiveNepreniaOtServerKeywordPage() {
  return <StaticKeywordPage slug="active-neprenia-ot-server" />;
}
