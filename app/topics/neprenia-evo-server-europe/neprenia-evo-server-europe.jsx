import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-evo-server-europe');
}

export default function NepreniaEvoServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="neprenia-evo-server-europe" />;
}
