import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-infernal-ot-download');
}

export default function BestInfernalOtDownloadKeywordPage() {
  return <StaticKeywordPage slug="best-infernal-ot-download" />;
}
