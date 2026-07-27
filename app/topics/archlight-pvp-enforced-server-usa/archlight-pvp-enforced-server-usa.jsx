import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-pvp-enforced-server-usa');
}

export default function ArchlightPvpEnforcedServerUsaKeywordPage() {
  return <StaticKeywordPage slug="archlight-pvp-enforced-server-usa" />;
}
