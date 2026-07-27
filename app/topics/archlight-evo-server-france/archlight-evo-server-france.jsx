import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-evo-server-france');
}

export default function ArchlightEvoServerFranceKeywordPage() {
  return <StaticKeywordPage slug="archlight-evo-server-france" />;
}
