import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-mist-of-death-ot');
}

export default function FreshStartMistOfDeathOtKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-mist-of-death-ot" />;
}
