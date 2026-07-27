import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-server-list-france');
}

export default function PvpServerListFranceKeywordPage() {
  return <StaticKeywordPage slug="pvp-server-list-france" />;
}
