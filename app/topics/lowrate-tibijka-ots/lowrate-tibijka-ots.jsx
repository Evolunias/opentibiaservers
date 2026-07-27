import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-tibijka-ots');
}

export default function LowrateTibijkaOtsKeywordPage() {
  return <StaticKeywordPage slug="lowrate-tibijka-ots" />;
}
