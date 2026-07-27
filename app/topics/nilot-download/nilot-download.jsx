import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-download');
}

export default function NilotDownloadKeywordPage() {
  return <StaticKeywordPage slug="nilot-download" />;
}
