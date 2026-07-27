import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('secura-community');
}

export default function SecuraCommunityKeywordPage() {
  return <StaticKeywordPage slug="secura-community" />;
}
