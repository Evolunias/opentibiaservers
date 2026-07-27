import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('elera-community');
}

export default function EleraCommunityKeywordPage() {
  return <StaticKeywordPage slug="elera-community" />;
}
