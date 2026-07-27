import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-non-pvp-server-north-america');
}

export default function ArchlightNonPvpServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="archlight-non-pvp-server-north-america" />;
}
