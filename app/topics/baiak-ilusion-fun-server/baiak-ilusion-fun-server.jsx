import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-fun-server');
}

export default function BaiakIlusionFunServerKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-fun-server" />;
}
