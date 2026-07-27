import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-guide-sweden');
}

export default function NonPvpGuideSwedenKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-guide-sweden" />;
}
