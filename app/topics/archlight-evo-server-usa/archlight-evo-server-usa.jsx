import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-evo-server-usa');
}

export default function ArchlightEvoServerUsaKeywordPage() {
  return <StaticKeywordPage slug="archlight-evo-server-usa" />;
}
