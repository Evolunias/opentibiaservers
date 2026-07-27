import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-carlinot-official');
}

export default function CustomCarlinotOfficialKeywordPage() {
  return <StaticKeywordPage slug="custom-carlinot-official" />;
}
