import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-retro-server-north-america');
}

export default function EvoluniaRetroServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="evolunia-retro-server-north-america" />;
}
