import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-8-0-pvp-enforced-server');
}

export default function Sabrehaven80PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-8-0-pvp-enforced-server" />;
}
