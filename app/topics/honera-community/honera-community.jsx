import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('honera-community');
}

export default function HoneraCommunityKeywordPage() {
  return <StaticKeywordPage slug="honera-community" />;
}
