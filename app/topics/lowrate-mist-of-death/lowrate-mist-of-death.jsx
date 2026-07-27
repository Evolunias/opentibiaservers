import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-mist-of-death');
}

export default function LowrateMistOfDeathKeywordPage() {
  return <StaticKeywordPage slug="lowrate-mist-of-death" />;
}
