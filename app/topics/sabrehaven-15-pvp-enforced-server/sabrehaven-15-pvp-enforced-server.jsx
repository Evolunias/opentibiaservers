import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-15-pvp-enforced-server');
}

export default function Sabrehaven15PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-15-pvp-enforced-server" />;
}
