import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-7-1-baiak-server');
}

export default function Neprenia71BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="neprenia-7-1-baiak-server" />;
}
