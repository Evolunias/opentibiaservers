import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-guide-canada');
}

export default function NoResetGuideCanadaKeywordPage() {
  return <StaticKeywordPage slug="no-reset-guide-canada" />;
}
