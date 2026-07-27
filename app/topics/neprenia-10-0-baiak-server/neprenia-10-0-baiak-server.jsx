import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-10-0-baiak-server');
}

export default function Neprenia100BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="neprenia-10-0-baiak-server" />;
}
