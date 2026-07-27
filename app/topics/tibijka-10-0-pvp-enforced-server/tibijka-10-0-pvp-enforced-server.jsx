import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-10-0-pvp-enforced-server');
}

export default function Tibijka100PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="tibijka-10-0-pvp-enforced-server" />;
}
