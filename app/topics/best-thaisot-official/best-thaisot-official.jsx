import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-thaisot-official');
}

export default function BestThaisotOfficialKeywordPage() {
  return <StaticKeywordPage slug="best-thaisot-official" />;
}
