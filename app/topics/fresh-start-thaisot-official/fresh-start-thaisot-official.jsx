import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-thaisot-official');
}

export default function FreshStartThaisotOfficialKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-thaisot-official" />;
}
