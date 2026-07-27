import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-pvp-server-uk');
}

export default function ImperianicPvpServerUkKeywordPage() {
  return <StaticKeywordPage slug="imperianic-pvp-server-uk" />;
}
