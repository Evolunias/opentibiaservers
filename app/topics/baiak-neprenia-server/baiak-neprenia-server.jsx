import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-neprenia-server');
}

export default function BaiakNepreniaServerKeywordPage() {
  return <StaticKeywordPage slug="baiak-neprenia-server" />;
}
