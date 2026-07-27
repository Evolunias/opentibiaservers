import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-pvp-enforced-server-france');
}

export default function ArchlightPvpEnforcedServerFranceKeywordPage() {
  return <StaticKeywordPage slug="archlight-pvp-enforced-server-france" />;
}
