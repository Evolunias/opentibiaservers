import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-no-reset-server-germany');
}

export default function AureraGlobalNoResetServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-no-reset-server-germany" />;
}
