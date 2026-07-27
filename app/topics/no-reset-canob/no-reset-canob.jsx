import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-canob');
}

export default function NoResetCanobKeywordPage() {
  return <StaticKeywordPage slug="no-reset-canob" />;
}
