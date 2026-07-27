import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-nostalther-official');
}

export default function OfficialNostaltherOfficialKeywordPage() {
  return <StaticKeywordPage slug="official-nostalther-official" />;
}
