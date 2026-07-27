import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-evolunia');
}

export default function CurrentEvoluniaKeywordPage() {
  return <StaticKeywordPage slug="current-evolunia" />;
}
