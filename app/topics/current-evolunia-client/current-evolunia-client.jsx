import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-evolunia-client');
}

export default function CurrentEvoluniaClientKeywordPage() {
  return <StaticKeywordPage slug="current-evolunia-client" />;
}
