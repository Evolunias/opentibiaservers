import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otland-europe');
}

export default function OtlandEuropeKeywordPage() {
  return <StaticKeywordPage slug="otland-europe" />;
}
