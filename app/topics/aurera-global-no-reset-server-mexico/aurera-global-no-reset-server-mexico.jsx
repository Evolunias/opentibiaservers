import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-no-reset-server-mexico');
}

export default function AureraGlobalNoResetServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-no-reset-server-mexico" />;
}
