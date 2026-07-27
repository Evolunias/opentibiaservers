import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-no-reset-server-france');
}

export default function OxygenotNoResetServerFranceKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-no-reset-server-france" />;
}
