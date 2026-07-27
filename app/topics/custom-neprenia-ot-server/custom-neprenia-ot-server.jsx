import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-neprenia-ot-server');
}

export default function CustomNepreniaOtServerKeywordPage() {
  return <StaticKeywordPage slug="custom-neprenia-ot-server" />;
}
