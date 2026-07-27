import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('jamera-community');
}

export default function JameraCommunityKeywordPage() {
  return <StaticKeywordPage slug="jamera-community" />;
}
