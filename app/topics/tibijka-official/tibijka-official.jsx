import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-official');
}

export default function TibijkaOfficialKeywordPage() {
  return <StaticKeywordPage slug="tibijka-official" />;
}
