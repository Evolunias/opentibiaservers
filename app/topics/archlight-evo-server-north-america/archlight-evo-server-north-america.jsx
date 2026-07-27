import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-evo-server-north-america');
}

export default function ArchlightEvoServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="archlight-evo-server-north-america" />;
}
