import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-tibijka-official');
}

export default function FreshStartTibijkaOfficialKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-tibijka-official" />;
}
