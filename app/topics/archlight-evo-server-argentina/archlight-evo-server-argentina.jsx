import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-evo-server-argentina');
}

export default function ArchlightEvoServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="archlight-evo-server-argentina" />;
}
