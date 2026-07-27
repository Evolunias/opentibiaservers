import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-coxaot-download');
}

export default function NewCoxaotDownloadKeywordPage() {
  return <StaticKeywordPage slug="new-coxaot-download" />;
}
