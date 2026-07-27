import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-coxaot-guide');
}

export default function OfficialCoxaotGuideKeywordPage() {
  return <StaticKeywordPage slug="official-coxaot-guide" />;
}
