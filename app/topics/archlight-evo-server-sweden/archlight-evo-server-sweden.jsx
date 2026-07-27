import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-evo-server-sweden');
}

export default function ArchlightEvoServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="archlight-evo-server-sweden" />;
}
