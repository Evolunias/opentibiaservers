import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-mist-of-death');
}

export default function FreshStartMistOfDeathKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-mist-of-death" />;
}
