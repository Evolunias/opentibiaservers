import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-evolunia');
}

export default function FreshStartEvoluniaKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-evolunia" />;
}
