import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-no-reset-server-usa');
}

export default function UnlineNoResetServerUsaKeywordPage() {
  return <StaticKeywordPage slug="unline-no-reset-server-usa" />;
}
