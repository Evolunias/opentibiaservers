import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-thaisot-official');
}

export default function TopThaisotOfficialKeywordPage() {
  return <StaticKeywordPage slug="top-thaisot-official" />;
}
