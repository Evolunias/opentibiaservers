import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-baiak-download');
}

export default function Tibia11BaiakDownloadKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-baiak-download" />;
}
