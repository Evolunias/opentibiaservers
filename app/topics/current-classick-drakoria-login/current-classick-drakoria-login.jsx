import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-classick-drakoria-login');
}

export default function CurrentClassickDrakoriaLoginKeywordPage() {
  return <StaticKeywordPage slug="current-classick-drakoria-login" />;
}
