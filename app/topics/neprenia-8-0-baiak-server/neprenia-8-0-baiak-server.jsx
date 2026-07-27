import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-8-0-baiak-server');
}

export default function Neprenia80BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="neprenia-8-0-baiak-server" />;
}
