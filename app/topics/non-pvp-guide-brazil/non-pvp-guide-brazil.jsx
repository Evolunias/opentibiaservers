import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-guide-brazil');
}

export default function NonPvpGuideBrazilKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-guide-brazil" />;
}
