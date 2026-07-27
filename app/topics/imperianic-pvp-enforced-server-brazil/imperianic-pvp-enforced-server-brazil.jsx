import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-pvp-enforced-server-brazil');
}

export default function ImperianicPvpEnforcedServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="imperianic-pvp-enforced-server-brazil" />;
}
