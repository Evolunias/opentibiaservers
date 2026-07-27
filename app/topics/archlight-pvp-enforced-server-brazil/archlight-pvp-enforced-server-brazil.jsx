import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-pvp-enforced-server-brazil');
}

export default function ArchlightPvpEnforcedServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="archlight-pvp-enforced-server-brazil" />;
}
