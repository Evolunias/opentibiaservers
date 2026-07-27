import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-sabrehaven-download');
}

export default function FreshStartSabrehavenDownloadKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-sabrehaven-download" />;
}
