import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-pvp-enforced-server-mexico');
}

export default function ArchlightPvpEnforcedServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="archlight-pvp-enforced-server-mexico" />;
}
