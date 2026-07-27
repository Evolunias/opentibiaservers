import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-guide-sweden');
}

export default function PvpGuideSwedenKeywordPage() {
  return <StaticKeywordPage slug="pvp-guide-sweden" />;
}
