import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-8-6-pvp-enforced-server');
}

export default function Sabrehaven86PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-8-6-pvp-enforced-server" />;
}
