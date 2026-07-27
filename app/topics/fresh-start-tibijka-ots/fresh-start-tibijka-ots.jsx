import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-tibijka-ots');
}

export default function FreshStartTibijkaOtsKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-tibijka-ots" />;
}
