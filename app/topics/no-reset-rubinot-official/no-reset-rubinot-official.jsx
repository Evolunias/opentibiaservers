import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-rubinot-official');
}

export default function NoResetRubinotOfficialKeywordPage() {
  return <StaticKeywordPage slug="no-reset-rubinot-official" />;
}
