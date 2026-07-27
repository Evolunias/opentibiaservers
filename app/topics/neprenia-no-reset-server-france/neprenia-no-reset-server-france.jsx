import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-no-reset-server-france');
}

export default function NepreniaNoResetServerFranceKeywordPage() {
  return <StaticKeywordPage slug="neprenia-no-reset-server-france" />;
}
