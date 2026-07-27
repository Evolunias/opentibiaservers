import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-yurots-official');
}

export default function PopularYurotsOfficialKeywordPage() {
  return <StaticKeywordPage slug="popular-yurots-official" />;
}
