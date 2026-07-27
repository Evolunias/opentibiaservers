import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-evolunia-client');
}

export default function TopEvoluniaClientKeywordPage() {
  return <StaticKeywordPage slug="top-evolunia-client" />;
}
