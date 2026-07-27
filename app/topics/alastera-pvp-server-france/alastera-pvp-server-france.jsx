import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-pvp-server-france');
}

export default function AlasteraPvpServerFranceKeywordPage() {
  return <StaticKeywordPage slug="alastera-pvp-server-france" />;
}
