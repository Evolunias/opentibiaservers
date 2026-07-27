import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-pvp-enforced-server-poland');
}

export default function ArchlightPvpEnforcedServerPolandKeywordPage() {
  return <StaticKeywordPage slug="archlight-pvp-enforced-server-poland" />;
}
