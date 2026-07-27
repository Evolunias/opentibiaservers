import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-mist-of-death-ots');
}

export default function TopMistOfDeathOtsKeywordPage() {
  return <StaticKeywordPage slug="top-mist-of-death-ots" />;
}
