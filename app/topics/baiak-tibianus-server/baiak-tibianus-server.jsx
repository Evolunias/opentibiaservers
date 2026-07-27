import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-tibianus-server');
}

export default function BaiakTibianusServerKeywordPage() {
  return <StaticKeywordPage slug="baiak-tibianus-server" />;
}
