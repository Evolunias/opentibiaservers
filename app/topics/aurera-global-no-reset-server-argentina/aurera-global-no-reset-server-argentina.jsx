import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-no-reset-server-argentina');
}

export default function AureraGlobalNoResetServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-no-reset-server-argentina" />;
}
