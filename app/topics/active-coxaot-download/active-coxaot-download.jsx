import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-coxaot-download');
}

export default function ActiveCoxaotDownloadKeywordPage() {
  return <StaticKeywordPage slug="active-coxaot-download" />;
}
