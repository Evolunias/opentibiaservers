import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-7-72-pvp-enforced-server');
}

export default function Sabrehaven772PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-7-72-pvp-enforced-server" />;
}
