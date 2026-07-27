import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-similar-servers');
}

export default function BaiakIlusionSimilarServersKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-similar-servers" />;
}
