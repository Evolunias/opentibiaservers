import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-pvp-enforced-server-canada');
}

export default function ArchlightPvpEnforcedServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="archlight-pvp-enforced-server-canada" />;
}
