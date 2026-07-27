import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-aurera-global-official');
}

export default function NoResetAureraGlobalOfficialKeywordPage() {
  return <StaticKeywordPage slug="no-reset-aurera-global-official" />;
}
