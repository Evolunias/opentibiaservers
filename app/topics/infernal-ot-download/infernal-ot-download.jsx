import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-download');
}

export default function InfernalOtDownloadKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-download" />;
}
