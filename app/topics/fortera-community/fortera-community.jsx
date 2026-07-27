import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fortera-community');
}

export default function ForteraCommunityKeywordPage() {
  return <StaticKeywordPage slug="fortera-community" />;
}
