import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-tibijka-official');
}

export default function CurrentTibijkaOfficialKeywordPage() {
  return <StaticKeywordPage slug="current-tibijka-official" />;
}
