import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('julera-community');
}

export default function JuleraCommunityKeywordPage() {
  return <StaticKeywordPage slug="julera-community" />;
}
