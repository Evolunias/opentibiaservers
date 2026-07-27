import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otland-high-exp');
}

export default function OtlandHighExpKeywordPage() {
  return <StaticKeywordPage slug="otland-high-exp" />;
}
