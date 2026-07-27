import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-coxaot-download');
}

export default function CustomCoxaotDownloadKeywordPage() {
  return <StaticKeywordPage slug="custom-coxaot-download" />;
}
