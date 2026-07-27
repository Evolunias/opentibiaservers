import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otservlist-high-exp');
}

export default function OtservlistHighExpKeywordPage() {
  return <StaticKeywordPage slug="otservlist-high-exp" />;
}
