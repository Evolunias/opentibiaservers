import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-guide-mexico');
}

export default function BaiakGuideMexicoKeywordPage() {
  return <StaticKeywordPage slug="baiak-guide-mexico" />;
}
