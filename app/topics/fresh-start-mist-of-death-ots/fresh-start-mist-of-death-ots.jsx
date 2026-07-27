import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-mist-of-death-ots');
}

export default function FreshStartMistOfDeathOtsKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-mist-of-death-ots" />;
}
