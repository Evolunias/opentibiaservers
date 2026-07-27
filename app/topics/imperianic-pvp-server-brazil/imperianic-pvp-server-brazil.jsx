import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-pvp-server-brazil');
}

export default function ImperianicPvpServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="imperianic-pvp-server-brazil" />;
}
