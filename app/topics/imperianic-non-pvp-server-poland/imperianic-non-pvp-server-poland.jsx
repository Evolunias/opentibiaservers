import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-non-pvp-server-poland');
}

export default function ImperianicNonPvpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="imperianic-non-pvp-server-poland" />;
}
