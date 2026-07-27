import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-non-pvp-server-brazil');
}

export default function ImperianicNonPvpServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="imperianic-non-pvp-server-brazil" />;
}
