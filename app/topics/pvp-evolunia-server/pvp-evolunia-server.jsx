import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-evolunia-server');
}

export default function PvpEvoluniaServerKeywordPage() {
  return <StaticKeywordPage slug="pvp-evolunia-server" />;
}
