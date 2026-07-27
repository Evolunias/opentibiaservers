import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-carlinot');
}

export default function OfficialCarlinotKeywordPage() {
  return <StaticKeywordPage slug="official-carlinot" />;
}
