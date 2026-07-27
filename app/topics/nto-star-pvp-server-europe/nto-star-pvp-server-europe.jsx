import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-pvp-server-europe');
}

export default function NtoStarPvpServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="nto-star-pvp-server-europe" />;
}
