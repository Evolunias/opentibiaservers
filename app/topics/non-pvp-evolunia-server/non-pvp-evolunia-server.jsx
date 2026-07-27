import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-evolunia-server');
}

export default function NonPvpEvoluniaServerKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-evolunia-server" />;
}
