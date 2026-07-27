import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-oxygenot-official');
}

export default function NoResetOxygenotOfficialKeywordPage() {
  return <StaticKeywordPage slug="no-reset-oxygenot-official" />;
}
