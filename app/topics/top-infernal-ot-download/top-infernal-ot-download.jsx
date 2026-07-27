import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-infernal-ot-download');
}

export default function TopInfernalOtDownloadKeywordPage() {
  return <StaticKeywordPage slug="top-infernal-ot-download" />;
}
