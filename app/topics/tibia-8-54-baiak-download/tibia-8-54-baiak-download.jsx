import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-54-baiak-download');
}

export default function Tibia854BaiakDownloadKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-54-baiak-download" />;
}
