import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-14-baiak-server');
}

export default function Neprenia14BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="neprenia-14-baiak-server" />;
}
