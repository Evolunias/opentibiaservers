import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-nostalther-guide');
}

export default function OfficialNostaltherGuideKeywordPage() {
  return <StaticKeywordPage slug="official-nostalther-guide" />;
}
