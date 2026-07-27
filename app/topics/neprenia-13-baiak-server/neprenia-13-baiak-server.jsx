import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-13-baiak-server');
}

export default function Neprenia13BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="neprenia-13-baiak-server" />;
}
