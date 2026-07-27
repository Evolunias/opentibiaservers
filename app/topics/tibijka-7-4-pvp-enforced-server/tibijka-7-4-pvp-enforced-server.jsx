import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-7-4-pvp-enforced-server');
}

export default function Tibijka74PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="tibijka-7-4-pvp-enforced-server" />;
}
