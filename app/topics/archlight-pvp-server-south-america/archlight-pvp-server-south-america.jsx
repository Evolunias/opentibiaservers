import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-pvp-server-south-america');
}

export default function ArchlightPvpServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="archlight-pvp-server-south-america" />;
}
