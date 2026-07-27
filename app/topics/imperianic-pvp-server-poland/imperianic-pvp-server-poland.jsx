import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-pvp-server-poland');
}

export default function ImperianicPvpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="imperianic-pvp-server-poland" />;
}
