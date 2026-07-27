import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-harmonia-ot-official');
}

export default function NoResetHarmoniaOtOfficialKeywordPage() {
  return <StaticKeywordPage slug="no-reset-harmonia-ot-official" />;
}
