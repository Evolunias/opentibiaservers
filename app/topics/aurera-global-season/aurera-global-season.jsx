import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-season');
}

export default function AureraGlobalSeasonKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-season" />;
}
