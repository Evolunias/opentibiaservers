import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otservlist-europe');
}

export default function OtservlistEuropeKeywordPage() {
  return <StaticKeywordPage slug="otservlist-europe" />;
}
