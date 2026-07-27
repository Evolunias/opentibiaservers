import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-retro-server-south-america');
}

export default function EvoluniaRetroServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="evolunia-retro-server-south-america" />;
}
