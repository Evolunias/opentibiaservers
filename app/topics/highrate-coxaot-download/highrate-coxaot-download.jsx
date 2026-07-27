import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-coxaot-download');
}

export default function HighrateCoxaotDownloadKeywordPage() {
  return <StaticKeywordPage slug="highrate-coxaot-download" />;
}
