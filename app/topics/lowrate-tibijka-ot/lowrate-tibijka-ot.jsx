import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-tibijka-ot');
}

export default function LowrateTibijkaOtKeywordPage() {
  return <StaticKeywordPage slug="lowrate-tibijka-ot" />;
}
