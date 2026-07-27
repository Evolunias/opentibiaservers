import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-pvp-enforced-server-latin-america');
}

export default function ArchlightPvpEnforcedServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="archlight-pvp-enforced-server-latin-america" />;
}
