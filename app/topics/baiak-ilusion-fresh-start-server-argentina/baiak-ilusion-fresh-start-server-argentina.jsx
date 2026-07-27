import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-fresh-start-server-argentina');
}

export default function BaiakIlusionFreshStartServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-fresh-start-server-argentina" />;
}
