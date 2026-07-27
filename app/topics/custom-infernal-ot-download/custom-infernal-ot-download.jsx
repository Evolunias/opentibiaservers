import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-infernal-ot-download');
}

export default function CustomInfernalOtDownloadKeywordPage() {
  return <StaticKeywordPage slug="custom-infernal-ot-download" />;
}
