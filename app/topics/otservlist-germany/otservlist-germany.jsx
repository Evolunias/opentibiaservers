import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otservlist-germany');
}

export default function OtservlistGermanyKeywordPage() {
  return <StaticKeywordPage slug="otservlist-germany" />;
}
