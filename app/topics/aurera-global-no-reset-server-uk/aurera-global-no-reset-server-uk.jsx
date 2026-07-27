import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-no-reset-server-uk');
}

export default function AureraGlobalNoResetServerUkKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-no-reset-server-uk" />;
}
