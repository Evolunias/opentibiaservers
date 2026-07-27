import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-retro-server-poland');
}

export default function EvoluniaRetroServerPolandKeywordPage() {
  return <StaticKeywordPage slug="evolunia-retro-server-poland" />;
}
