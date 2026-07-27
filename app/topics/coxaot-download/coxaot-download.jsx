import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-download');
}

export default function CoxaotDownloadKeywordPage() {
  return <StaticKeywordPage slug="coxaot-download" />;
}
