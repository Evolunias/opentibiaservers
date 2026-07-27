import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-neprenia-ot-server');
}

export default function NoResetNepreniaOtServerKeywordPage() {
  return <StaticKeywordPage slug="no-reset-neprenia-ot-server" />;
}
