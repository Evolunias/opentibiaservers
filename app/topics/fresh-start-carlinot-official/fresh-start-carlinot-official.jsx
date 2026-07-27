import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-carlinot-official');
}

export default function FreshStartCarlinotOfficialKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-carlinot-official" />;
}
