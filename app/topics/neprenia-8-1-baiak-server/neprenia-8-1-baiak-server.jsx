import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-8-1-baiak-server');
}

export default function Neprenia81BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="neprenia-8-1-baiak-server" />;
}
