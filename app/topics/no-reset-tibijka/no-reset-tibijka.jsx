import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-tibijka');
}

export default function NoResetTibijkaKeywordPage() {
  return <StaticKeywordPage slug="no-reset-tibijka" />;
}
