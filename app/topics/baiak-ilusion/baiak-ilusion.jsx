import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion');
}

export default function BaiakIlusionKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion" />;
}
