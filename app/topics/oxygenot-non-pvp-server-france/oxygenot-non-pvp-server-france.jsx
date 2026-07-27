import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-non-pvp-server-france');
}

export default function OxygenotNonPvpServerFranceKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-non-pvp-server-france" />;
}
