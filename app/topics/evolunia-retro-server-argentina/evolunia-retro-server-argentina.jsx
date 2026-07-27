import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-retro-server-argentina');
}

export default function EvoluniaRetroServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="evolunia-retro-server-argentina" />;
}
