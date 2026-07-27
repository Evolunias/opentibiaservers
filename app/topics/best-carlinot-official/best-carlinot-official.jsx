import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-carlinot-official');
}

export default function BestCarlinotOfficialKeywordPage() {
  return <StaticKeywordPage slug="best-carlinot-official" />;
}
