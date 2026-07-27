import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-tibijka-official');
}

export default function OfficialTibijkaOfficialKeywordPage() {
  return <StaticKeywordPage slug="official-tibijka-official" />;
}
