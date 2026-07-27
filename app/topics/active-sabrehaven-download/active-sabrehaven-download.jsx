import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-sabrehaven-download');
}

export default function ActiveSabrehavenDownloadKeywordPage() {
  return <StaticKeywordPage slug="active-sabrehaven-download" />;
}
