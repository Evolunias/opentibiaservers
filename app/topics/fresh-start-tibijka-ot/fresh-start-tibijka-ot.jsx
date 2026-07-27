import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-tibijka-ot');
}

export default function FreshStartTibijkaOtKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-tibijka-ot" />;
}
