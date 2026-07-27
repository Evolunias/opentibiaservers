import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pacera-community');
}

export default function PaceraCommunityKeywordPage() {
  return <StaticKeywordPage slug="pacera-community" />;
}
