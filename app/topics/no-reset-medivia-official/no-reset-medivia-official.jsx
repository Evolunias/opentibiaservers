import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-medivia-official');
}

export default function NoResetMediviaOfficialKeywordPage() {
  return <StaticKeywordPage slug="no-reset-medivia-official" />;
}
