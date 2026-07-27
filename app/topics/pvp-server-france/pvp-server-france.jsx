import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-server-france');
}

export default function PvpServerFranceKeywordPage() {
  return <StaticKeywordPage slug="pvp-server-france" />;
}
