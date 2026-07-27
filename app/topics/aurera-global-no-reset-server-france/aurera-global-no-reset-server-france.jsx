import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-no-reset-server-france');
}

export default function AureraGlobalNoResetServerFranceKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-no-reset-server-france" />;
}
