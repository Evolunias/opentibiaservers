import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-evolunia-server');
}

export default function CurrentEvoluniaServerKeywordPage() {
  return <StaticKeywordPage slug="current-evolunia-server" />;
}
