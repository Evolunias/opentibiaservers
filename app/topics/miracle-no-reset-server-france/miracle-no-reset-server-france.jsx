import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-no-reset-server-france');
}

export default function MiracleNoResetServerFranceKeywordPage() {
  return <StaticKeywordPage slug="miracle-no-reset-server-france" />;
}
