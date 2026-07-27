import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-pvp-server-europe');
}

export default function ImperianicPvpServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="imperianic-pvp-server-europe" />;
}
