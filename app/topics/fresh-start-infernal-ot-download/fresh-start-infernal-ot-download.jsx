import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-infernal-ot-download');
}

export default function FreshStartInfernalOtDownloadKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-infernal-ot-download" />;
}
