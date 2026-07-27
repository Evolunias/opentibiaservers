import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-sabrehaven-download');
}

export default function HighrateSabrehavenDownloadKeywordPage() {
  return <StaticKeywordPage slug="highrate-sabrehaven-download" />;
}
