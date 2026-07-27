import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-neprenia-ot-server');
}

export default function LowrateNepreniaOtServerKeywordPage() {
  return <StaticKeywordPage slug="lowrate-neprenia-ot-server" />;
}
