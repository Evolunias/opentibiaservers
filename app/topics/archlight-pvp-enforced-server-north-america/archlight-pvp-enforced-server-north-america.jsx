import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-pvp-enforced-server-north-america');
}

export default function ArchlightPvpEnforcedServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="archlight-pvp-enforced-server-north-america" />;
}
