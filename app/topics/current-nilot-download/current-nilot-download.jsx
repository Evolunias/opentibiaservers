import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-nilot-download');
}

export default function CurrentNilotDownloadKeywordPage() {
  return <StaticKeywordPage slug="current-nilot-download" />;
}
