import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-noxiousot-guide');
}

export default function NoResetNoxiousotGuideKeywordPage() {
  return <StaticKeywordPage slug="no-reset-noxiousot-guide" />;
}
