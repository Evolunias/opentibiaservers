import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-carlinot-official');
}

export default function NoResetCarlinotOfficialKeywordPage() {
  return <StaticKeywordPage slug="no-reset-carlinot-official" />;
}
