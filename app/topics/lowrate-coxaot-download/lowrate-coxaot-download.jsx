import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-coxaot-download');
}

export default function LowrateCoxaotDownloadKeywordPage() {
  return <StaticKeywordPage slug="lowrate-coxaot-download" />;
}
