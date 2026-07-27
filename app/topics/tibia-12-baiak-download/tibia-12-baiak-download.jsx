import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-12-baiak-download');
}

export default function Tibia12BaiakDownloadKeywordPage() {
  return <StaticKeywordPage slug="tibia-12-baiak-download" />;
}
