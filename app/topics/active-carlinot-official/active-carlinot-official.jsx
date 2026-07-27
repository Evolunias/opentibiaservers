import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-carlinot-official');
}

export default function ActiveCarlinotOfficialKeywordPage() {
  return <StaticKeywordPage slug="active-carlinot-official" />;
}
