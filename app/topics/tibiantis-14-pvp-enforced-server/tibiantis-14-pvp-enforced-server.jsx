import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-14-pvp-enforced-server');
}

export default function Tibiantis14PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-14-pvp-enforced-server" />;
}
