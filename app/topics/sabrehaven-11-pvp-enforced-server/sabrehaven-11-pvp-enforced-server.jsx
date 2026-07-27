import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-11-pvp-enforced-server');
}

export default function Sabrehaven11PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-11-pvp-enforced-server" />;
}
