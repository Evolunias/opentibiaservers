import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-pvp-enforced-server-argentina');
}

export default function ImperianicPvpEnforcedServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="imperianic-pvp-enforced-server-argentina" />;
}
