import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-9-6-baiak-server');
}

export default function Neprenia96BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="neprenia-9-6-baiak-server" />;
}
