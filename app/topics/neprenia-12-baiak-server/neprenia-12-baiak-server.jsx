import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-12-baiak-server');
}

export default function Neprenia12BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="neprenia-12-baiak-server" />;
}
