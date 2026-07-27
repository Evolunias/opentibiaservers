import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-kasteria-client');
}

export default function NoResetKasteriaClientKeywordPage() {
  return <StaticKeywordPage slug="no-reset-kasteria-client" />;
}
