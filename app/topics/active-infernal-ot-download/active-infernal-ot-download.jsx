import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-infernal-ot-download');
}

export default function ActiveInfernalOtDownloadKeywordPage() {
  return <StaticKeywordPage slug="active-infernal-ot-download" />;
}
