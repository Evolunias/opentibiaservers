import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-neprenia-official');
}

export default function NoResetNepreniaOfficialKeywordPage() {
  return <StaticKeywordPage slug="no-reset-neprenia-official" />;
}
