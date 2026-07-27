import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eternia-community');
}

export default function EterniaCommunityKeywordPage() {
  return <StaticKeywordPage slug="eternia-community" />;
}
