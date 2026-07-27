import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-official');
}

export default function ThaisotOfficialKeywordPage() {
  return <StaticKeywordPage slug="thaisot-official" />;
}
