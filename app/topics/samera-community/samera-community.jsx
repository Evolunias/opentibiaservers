import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('samera-community');
}

export default function SameraCommunityKeywordPage() {
  return <StaticKeywordPage slug="samera-community" />;
}
