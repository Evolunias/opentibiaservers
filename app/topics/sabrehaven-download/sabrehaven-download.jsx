import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-download');
}

export default function SabrehavenDownloadKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-download" />;
}
