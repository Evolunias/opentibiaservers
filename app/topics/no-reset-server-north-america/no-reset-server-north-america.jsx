import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-server-north-america');
}

export default function NoResetServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="no-reset-server-north-america" />;
}
