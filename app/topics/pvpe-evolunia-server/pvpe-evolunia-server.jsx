import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-evolunia-server');
}

export default function PvpeEvoluniaServerKeywordPage() {
  return <StaticKeywordPage slug="pvpe-evolunia-server" />;
}
