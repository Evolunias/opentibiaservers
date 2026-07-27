import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nova-community');
}

export default function NovaCommunityKeywordPage() {
  return <StaticKeywordPage slug="nova-community" />;
}
