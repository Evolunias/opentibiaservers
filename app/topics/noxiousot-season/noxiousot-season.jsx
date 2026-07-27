import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-season');
}

export default function NoxiousotSeasonKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-season" />;
}
