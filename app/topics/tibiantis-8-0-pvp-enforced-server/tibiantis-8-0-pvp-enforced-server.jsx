import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-8-0-pvp-enforced-server');
}

export default function Tibiantis80PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-8-0-pvp-enforced-server" />;
}
