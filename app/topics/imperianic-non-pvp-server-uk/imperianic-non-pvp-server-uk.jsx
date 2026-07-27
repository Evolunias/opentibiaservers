import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-non-pvp-server-uk');
}

export default function ImperianicNonPvpServerUkKeywordPage() {
  return <StaticKeywordPage slug="imperianic-non-pvp-server-uk" />;
}
