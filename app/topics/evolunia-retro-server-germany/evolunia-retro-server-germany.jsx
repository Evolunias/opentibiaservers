import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-retro-server-germany');
}

export default function EvoluniaRetroServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="evolunia-retro-server-germany" />;
}
