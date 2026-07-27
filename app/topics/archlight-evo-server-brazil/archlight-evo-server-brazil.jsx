import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-evo-server-brazil');
}

export default function ArchlightEvoServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="archlight-evo-server-brazil" />;
}
