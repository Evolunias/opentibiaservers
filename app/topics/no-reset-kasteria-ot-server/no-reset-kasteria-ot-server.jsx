import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-kasteria-ot-server');
}

export default function NoResetKasteriaOtServerKeywordPage() {
  return <StaticKeywordPage slug="no-reset-kasteria-ot-server" />;
}
