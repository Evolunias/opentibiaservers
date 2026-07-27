import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-coxaot-download');
}

export default function OfficialCoxaotDownloadKeywordPage() {
  return <StaticKeywordPage slug="official-coxaot-download" />;
}
