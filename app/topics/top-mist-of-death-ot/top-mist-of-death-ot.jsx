import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-mist-of-death-ot');
}

export default function TopMistOfDeathOtKeywordPage() {
  return <StaticKeywordPage slug="top-mist-of-death-ot" />;
}
