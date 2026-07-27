import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-carlinot-official');
}

export default function TopCarlinotOfficialKeywordPage() {
  return <StaticKeywordPage slug="top-carlinot-official" />;
}
