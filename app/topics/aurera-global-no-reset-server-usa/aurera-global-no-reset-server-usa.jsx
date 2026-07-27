import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-no-reset-server-usa');
}

export default function AureraGlobalNoResetServerUsaKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-no-reset-server-usa" />;
}
