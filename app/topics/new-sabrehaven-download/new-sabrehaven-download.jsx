import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-sabrehaven-download');
}

export default function NewSabrehavenDownloadKeywordPage() {
  return <StaticKeywordPage slug="new-sabrehaven-download" />;
}
