import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-non-pvp-server-europe');
}

export default function ImperianicNonPvpServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="imperianic-non-pvp-server-europe" />;
}
