import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-13-pvp-enforced-server');
}

export default function Sabrehaven13PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-13-pvp-enforced-server" />;
}
