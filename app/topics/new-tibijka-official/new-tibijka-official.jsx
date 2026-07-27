import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-tibijka-official');
}

export default function NewTibijkaOfficialKeywordPage() {
  return <StaticKeywordPage slug="new-tibijka-official" />;
}
