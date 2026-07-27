import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('quintera-community');
}

export default function QuinteraCommunityKeywordPage() {
  return <StaticKeywordPage slug="quintera-community" />;
}
