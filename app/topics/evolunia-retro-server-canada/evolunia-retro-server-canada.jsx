import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-retro-server-canada');
}

export default function EvoluniaRetroServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="evolunia-retro-server-canada" />;
}
