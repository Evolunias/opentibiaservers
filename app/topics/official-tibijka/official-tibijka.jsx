import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-tibijka');
}

export default function OfficialTibijkaKeywordPage() {
  return <StaticKeywordPage slug="official-tibijka" />;
}
