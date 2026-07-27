import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-no-reset-server-poland');
}

export default function AureraGlobalNoResetServerPolandKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-no-reset-server-poland" />;
}
