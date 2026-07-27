import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-classicus-official');
}

export default function NoResetClassicusOfficialKeywordPage() {
  return <StaticKeywordPage slug="no-reset-classicus-official" />;
}
