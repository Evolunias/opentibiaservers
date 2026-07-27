import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-8-1-pvp-enforced-server');
}

export default function Alastera81PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="alastera-8-1-pvp-enforced-server" />;
}
