import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-unline-official');
}

export default function NoResetUnlineOfficialKeywordPage() {
  return <StaticKeywordPage slug="no-reset-unline-official" />;
}
