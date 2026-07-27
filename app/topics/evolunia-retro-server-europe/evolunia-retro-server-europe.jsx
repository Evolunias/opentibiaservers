import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-retro-server-europe');
}

export default function EvoluniaRetroServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="evolunia-retro-server-europe" />;
}
