import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-mist-of-death');
}

export default function TopMistOfDeathKeywordPage() {
  return <StaticKeywordPage slug="top-mist-of-death" />;
}
