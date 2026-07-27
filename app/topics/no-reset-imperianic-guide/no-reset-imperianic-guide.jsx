import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-imperianic-guide');
}

export default function NoResetImperianicGuideKeywordPage() {
  return <StaticKeywordPage slug="no-reset-imperianic-guide" />;
}
