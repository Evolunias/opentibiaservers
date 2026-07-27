import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-14-pvp-enforced-server');
}

export default function Sabrehaven14PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-14-pvp-enforced-server" />;
}
