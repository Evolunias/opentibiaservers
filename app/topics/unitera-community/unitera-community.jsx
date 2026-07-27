import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unitera-community');
}

export default function UniteraCommunityKeywordPage() {
  return <StaticKeywordPage slug="unitera-community" />;
}
