import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-miracle-download');
}

export default function NewMiracleDownloadKeywordPage() {
  return <StaticKeywordPage slug="new-miracle-download" />;
}
