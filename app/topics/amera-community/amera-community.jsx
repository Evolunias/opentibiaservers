import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('amera-community');
}

export default function AmeraCommunityKeywordPage() {
  return <StaticKeywordPage slug="amera-community" />;
}
