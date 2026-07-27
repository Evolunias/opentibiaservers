import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-8-6-baiak-server');
}

export default function Neprenia86BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="neprenia-8-6-baiak-server" />;
}
