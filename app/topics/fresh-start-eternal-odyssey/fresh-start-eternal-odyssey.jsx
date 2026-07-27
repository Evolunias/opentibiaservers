import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-eternal-odyssey');
}

export default function FreshStartEternalOdysseyKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-eternal-odyssey" />;
}
