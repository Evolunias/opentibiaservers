import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-tibijka-official');
}

export default function LowrateTibijkaOfficialKeywordPage() {
  return <StaticKeywordPage slug="lowrate-tibijka-official" />;
}
