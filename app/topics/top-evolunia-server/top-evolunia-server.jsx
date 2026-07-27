import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-evolunia-server');
}

export default function TopEvoluniaServerKeywordPage() {
  return <StaticKeywordPage slug="top-evolunia-server" />;
}
