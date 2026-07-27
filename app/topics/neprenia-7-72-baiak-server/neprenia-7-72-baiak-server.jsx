import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-7-72-baiak-server');
}

export default function Neprenia772BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="neprenia-7-72-baiak-server" />;
}
