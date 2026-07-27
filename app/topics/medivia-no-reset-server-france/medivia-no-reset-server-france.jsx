import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-no-reset-server-france');
}

export default function MediviaNoResetServerFranceKeywordPage() {
  return <StaticKeywordPage slug="medivia-no-reset-server-france" />;
}
