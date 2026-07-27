import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-thaisot-official');
}

export default function PopularThaisotOfficialKeywordPage() {
  return <StaticKeywordPage slug="popular-thaisot-official" />;
}
