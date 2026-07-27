import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-classicus');
}

export default function NoResetClassicusKeywordPage() {
  return <StaticKeywordPage slug="no-reset-classicus" />;
}
