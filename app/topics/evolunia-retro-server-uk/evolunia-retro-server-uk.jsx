import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-retro-server-uk');
}

export default function EvoluniaRetroServerUkKeywordPage() {
  return <StaticKeywordPage slug="evolunia-retro-server-uk" />;
}
