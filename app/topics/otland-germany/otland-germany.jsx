import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otland-germany');
}

export default function OtlandGermanyKeywordPage() {
  return <StaticKeywordPage slug="otland-germany" />;
}
