import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-nilot-download');
}

export default function NewNilotDownloadKeywordPage() {
  return <StaticKeywordPage slug="new-nilot-download" />;
}
