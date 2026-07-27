import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-no-reset-server-canada');
}

export default function AureraGlobalNoResetServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-no-reset-server-canada" />;
}
