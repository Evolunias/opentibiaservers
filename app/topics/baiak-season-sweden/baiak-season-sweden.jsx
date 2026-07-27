import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-season-sweden');
}

export default function BaiakSeasonSwedenKeywordPage() {
  return <StaticKeywordPage slug="baiak-season-sweden" />;
}
