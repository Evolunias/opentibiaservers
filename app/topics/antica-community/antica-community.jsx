import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('antica-community');
}

export default function AnticaCommunityKeywordPage() {
  return <StaticKeywordPage slug="antica-community" />;
}
