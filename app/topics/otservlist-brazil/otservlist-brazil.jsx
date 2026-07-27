import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otservlist-brazil');
}

export default function OtservlistBrazilKeywordPage() {
  return <StaticKeywordPage slug="otservlist-brazil" />;
}
