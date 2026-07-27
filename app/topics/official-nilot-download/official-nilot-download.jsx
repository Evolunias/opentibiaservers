import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-nilot-download');
}

export default function OfficialNilotDownloadKeywordPage() {
  return <StaticKeywordPage slug="official-nilot-download" />;
}
