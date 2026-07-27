import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-ameria');
}

export default function NoResetAmeriaKeywordPage() {
  return <StaticKeywordPage slug="no-reset-ameria" />;
}
