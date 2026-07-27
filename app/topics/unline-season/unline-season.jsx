import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-season');
}

export default function UnlineSeasonKeywordPage() {
  return <StaticKeywordPage slug="unline-season" />;
}
