import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-15-pvp-enforced-server');
}

export default function Miracle15PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="miracle-15-pvp-enforced-server" />;
}
