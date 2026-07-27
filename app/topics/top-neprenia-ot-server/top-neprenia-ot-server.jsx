import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-neprenia-ot-server');
}

export default function TopNepreniaOtServerKeywordPage() {
  return <StaticKeywordPage slug="top-neprenia-ot-server" />;
}
