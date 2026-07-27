import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-12-pvp-enforced-server');
}

export default function Sabrehaven12PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-12-pvp-enforced-server" />;
}
