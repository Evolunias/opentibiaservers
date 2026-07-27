import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otland-sweden');
}

export default function OtlandSwedenKeywordPage() {
  return <StaticKeywordPage slug="otland-sweden" />;
}
