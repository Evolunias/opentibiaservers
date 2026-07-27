import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-pvp-server-canada');
}

export default function ArchlightPvpServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="archlight-pvp-server-canada" />;
}
