import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-no-reset-server-france');
}

export default function KasteriaNoResetServerFranceKeywordPage() {
  return <StaticKeywordPage slug="kasteria-no-reset-server-france" />;
}
