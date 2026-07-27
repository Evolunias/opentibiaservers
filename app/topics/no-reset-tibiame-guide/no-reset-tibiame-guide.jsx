import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-tibiame-guide');
}

export default function NoResetTibiameGuideKeywordPage() {
  return <StaticKeywordPage slug="no-reset-tibiame-guide" />;
}
