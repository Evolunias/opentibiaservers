import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-retro-server-sweden');
}

export default function EvoluniaRetroServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="evolunia-retro-server-sweden" />;
}
