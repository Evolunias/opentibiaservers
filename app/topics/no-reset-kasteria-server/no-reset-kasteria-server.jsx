import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-kasteria-server');
}

export default function NoResetKasteriaServerKeywordPage() {
  return <StaticKeywordPage slug="no-reset-kasteria-server" />;
}
