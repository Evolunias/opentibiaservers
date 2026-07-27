import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-infernal-ot-download');
}

export default function NewInfernalOtDownloadKeywordPage() {
  return <StaticKeywordPage slug="new-infernal-ot-download" />;
}
