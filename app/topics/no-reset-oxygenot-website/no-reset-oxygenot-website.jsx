import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-oxygenot-website');
}

export default function NoResetOxygenotWebsiteKeywordPage() {
  return <StaticKeywordPage slug="no-reset-oxygenot-website" />;
}
