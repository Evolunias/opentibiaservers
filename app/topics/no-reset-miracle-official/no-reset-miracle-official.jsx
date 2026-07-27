import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-miracle-official');
}

export default function NoResetMiracleOfficialKeywordPage() {
  return <StaticKeywordPage slug="no-reset-miracle-official" />;
}
