import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-10-0-pvp-enforced-server');
}

export default function Oldera100PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-10-0-pvp-enforced-server" />;
}
