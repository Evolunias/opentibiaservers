import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otservlist-sweden');
}

export default function OtservlistSwedenKeywordPage() {
  return <StaticKeywordPage slug="otservlist-sweden" />;
}
