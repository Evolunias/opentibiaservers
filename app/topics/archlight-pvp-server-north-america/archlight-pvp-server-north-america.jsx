import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-pvp-server-north-america');
}

export default function ArchlightPvpServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="archlight-pvp-server-north-america" />;
}
