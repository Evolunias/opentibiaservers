import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-retro-server-brazil');
}

export default function EvoluniaRetroServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="evolunia-retro-server-brazil" />;
}
