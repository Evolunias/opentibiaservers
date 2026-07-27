import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-9-6-pvp-enforced-server');
}

export default function Sabrehaven96PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-9-6-pvp-enforced-server" />;
}
