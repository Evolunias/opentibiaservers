import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-season');
}

export default function LumineraSeasonKeywordPage() {
  return <StaticKeywordPage slug="luminera-season" />;
}
