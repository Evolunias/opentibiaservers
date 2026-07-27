import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-evolunia-ots');
}

export default function CurrentEvoluniaOtsKeywordPage() {
  return <StaticKeywordPage slug="current-evolunia-ots" />;
}
