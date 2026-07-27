import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-tibiantis-ots');
}

export default function FreshStartTibiantisOtsKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-tibiantis-ots" />;
}
