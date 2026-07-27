import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-guide-france');
}

export default function BaiakGuideFranceKeywordPage() {
  return <StaticKeywordPage slug="baiak-guide-france" />;
}
