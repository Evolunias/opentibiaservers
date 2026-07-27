import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-sabrehaven-download');
}

export default function LowrateSabrehavenDownloadKeywordPage() {
  return <StaticKeywordPage slug="lowrate-sabrehaven-download" />;
}
