import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-guide-brazil');
}

export default function PvpGuideBrazilKeywordPage() {
  return <StaticKeywordPage slug="pvp-guide-brazil" />;
}
