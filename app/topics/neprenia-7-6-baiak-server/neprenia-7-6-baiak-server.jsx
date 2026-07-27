import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-7-6-baiak-server');
}

export default function Neprenia76BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="neprenia-7-6-baiak-server" />;
}
