import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-evo-server-germany');
}

export default function ArchlightEvoServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="archlight-evo-server-germany" />;
}
