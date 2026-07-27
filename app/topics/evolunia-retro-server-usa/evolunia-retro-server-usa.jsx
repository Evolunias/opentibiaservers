import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-retro-server-usa');
}

export default function EvoluniaRetroServerUsaKeywordPage() {
  return <StaticKeywordPage slug="evolunia-retro-server-usa" />;
}
