import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-server-list-north-america');
}

export default function NoResetServerListNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="no-reset-server-list-north-america" />;
}
