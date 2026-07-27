import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-10-98-pvp-enforced-server');
}

export default function Sabrehaven1098PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-10-98-pvp-enforced-server" />;
}
