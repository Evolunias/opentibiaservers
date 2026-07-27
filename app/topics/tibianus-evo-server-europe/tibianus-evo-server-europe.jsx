import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-evo-server-europe');
}

export default function TibianusEvoServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="tibianus-evo-server-europe" />;
}
