import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-evo-server-mexico');
}

export default function ArchlightEvoServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="archlight-evo-server-mexico" />;
}
