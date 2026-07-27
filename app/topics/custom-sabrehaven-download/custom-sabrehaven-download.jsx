import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-sabrehaven-download');
}

export default function CustomSabrehavenDownloadKeywordPage() {
  return <StaticKeywordPage slug="custom-sabrehaven-download" />;
}
