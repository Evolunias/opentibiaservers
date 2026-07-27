import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-pvp-server-france');
}

export default function OxygenotPvpServerFranceKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-pvp-server-france" />;
}
