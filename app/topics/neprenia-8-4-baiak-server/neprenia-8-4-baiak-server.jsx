import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-8-4-baiak-server');
}

export default function Neprenia84BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="neprenia-8-4-baiak-server" />;
}
