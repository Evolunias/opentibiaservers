import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-oxygenot');
}

export default function NoResetOxygenotKeywordPage() {
  return <StaticKeywordPage slug="no-reset-oxygenot" />;
}
