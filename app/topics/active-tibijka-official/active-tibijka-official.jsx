import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-tibijka-official');
}

export default function ActiveTibijkaOfficialKeywordPage() {
  return <StaticKeywordPage slug="active-tibijka-official" />;
}
