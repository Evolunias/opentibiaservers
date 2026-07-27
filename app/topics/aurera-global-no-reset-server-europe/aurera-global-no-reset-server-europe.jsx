import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-no-reset-server-europe');
}

export default function AureraGlobalNoResetServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-no-reset-server-europe" />;
}
