import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-download');
}

export default function OxygenotDownloadKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-download" />;
}
