import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-7-72-pvp-enforced-server');
}

export default function Imperianic772PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="imperianic-7-72-pvp-enforced-server" />;
}
