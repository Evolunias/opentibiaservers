import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-evo-server-france');
}

export default function DuraOnlineEvoServerFranceKeywordPage() {
  return <StaticKeywordPage slug="dura-online-evo-server-france" />;
}
