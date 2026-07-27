import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-sabrehaven-download');
}

export default function CurrentSabrehavenDownloadKeywordPage() {
  return <StaticKeywordPage slug="current-sabrehaven-download" />;
}
