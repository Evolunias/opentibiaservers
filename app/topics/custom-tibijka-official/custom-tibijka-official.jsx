import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-tibijka-official');
}

export default function CustomTibijkaOfficialKeywordPage() {
  return <StaticKeywordPage slug="custom-tibijka-official" />;
}
