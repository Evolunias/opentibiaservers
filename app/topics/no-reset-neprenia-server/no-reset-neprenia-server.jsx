import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-neprenia-server');
}

export default function NoResetNepreniaServerKeywordPage() {
  return <StaticKeywordPage slug="no-reset-neprenia-server" />;
}
