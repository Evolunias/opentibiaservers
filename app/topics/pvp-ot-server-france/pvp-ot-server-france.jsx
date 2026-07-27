import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-ot-server-france');
}

export default function PvpOtServerFranceKeywordPage() {
  return <StaticKeywordPage slug="pvp-ot-server-france" />;
}
