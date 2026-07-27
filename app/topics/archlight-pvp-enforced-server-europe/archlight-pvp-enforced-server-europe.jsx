import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-pvp-enforced-server-europe');
}

export default function ArchlightPvpEnforcedServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="archlight-pvp-enforced-server-europe" />;
}
