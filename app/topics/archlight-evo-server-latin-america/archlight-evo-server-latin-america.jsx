import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-evo-server-latin-america');
}

export default function ArchlightEvoServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="archlight-evo-server-latin-america" />;
}
