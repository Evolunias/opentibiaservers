import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-7-4-baiak-server');
}

export default function Neprenia74BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="neprenia-7-4-baiak-server" />;
}
