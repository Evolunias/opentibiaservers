import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-8-0-pvp-enforced-server');
}

export default function Unline80PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="unline-8-0-pvp-enforced-server" />;
}
