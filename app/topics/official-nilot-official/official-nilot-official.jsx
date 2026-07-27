import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-nilot-official');
}

export default function OfficialNilotOfficialKeywordPage() {
  return <StaticKeywordPage slug="official-nilot-official" />;
}
