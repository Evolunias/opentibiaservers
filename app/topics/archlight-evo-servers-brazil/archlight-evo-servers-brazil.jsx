import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-evo-servers-brazil');
}

export default function ArchlightEvoServersBrazilKeywordPage() {
  return <StaticKeywordPage slug="archlight-evo-servers-brazil" />;
}
