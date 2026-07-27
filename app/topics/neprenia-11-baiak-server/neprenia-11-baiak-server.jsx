import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-11-baiak-server');
}

export default function Neprenia11BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="neprenia-11-baiak-server" />;
}
