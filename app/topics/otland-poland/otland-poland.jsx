import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otland-poland');
}

export default function OtlandPolandKeywordPage() {
  return <StaticKeywordPage slug="otland-poland" />;
}
