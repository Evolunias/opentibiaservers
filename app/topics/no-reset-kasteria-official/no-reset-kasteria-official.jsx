import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-kasteria-official');
}

export default function NoResetKasteriaOfficialKeywordPage() {
  return <StaticKeywordPage slug="no-reset-kasteria-official" />;
}
