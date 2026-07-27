import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-carlinot-official');
}

export default function NewCarlinotOfficialKeywordPage() {
  return <StaticKeywordPage slug="new-carlinot-official" />;
}
