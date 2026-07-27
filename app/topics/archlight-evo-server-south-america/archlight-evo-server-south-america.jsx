import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-evo-server-south-america');
}

export default function ArchlightEvoServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="archlight-evo-server-south-america" />;
}
