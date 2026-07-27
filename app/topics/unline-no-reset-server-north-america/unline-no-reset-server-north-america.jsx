import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-no-reset-server-north-america');
}

export default function UnlineNoResetServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="unline-no-reset-server-north-america" />;
}
