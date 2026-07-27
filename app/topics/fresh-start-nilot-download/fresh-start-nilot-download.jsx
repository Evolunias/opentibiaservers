import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-nilot-download');
}

export default function FreshStartNilotDownloadKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-nilot-download" />;
}
