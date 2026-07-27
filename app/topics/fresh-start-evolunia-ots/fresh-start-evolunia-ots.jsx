import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-evolunia-ots');
}

export default function FreshStartEvoluniaOtsKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-evolunia-ots" />;
}
