import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('valoria-community');
}

export default function ValoriaCommunityKeywordPage() {
  return <StaticKeywordPage slug="valoria-community" />;
}
