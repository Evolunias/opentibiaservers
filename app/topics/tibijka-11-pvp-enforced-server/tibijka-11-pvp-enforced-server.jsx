import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-11-pvp-enforced-server');
}

export default function Tibijka11PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="tibijka-11-pvp-enforced-server" />;
}
