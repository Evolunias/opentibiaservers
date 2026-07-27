import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-neprenia-ot-server');
}

export default function CurrentNepreniaOtServerKeywordPage() {
  return <StaticKeywordPage slug="current-neprenia-ot-server" />;
}
