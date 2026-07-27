import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-sabrehaven-download');
}

export default function BestSabrehavenDownloadKeywordPage() {
  return <StaticKeywordPage slug="best-sabrehaven-download" />;
}
