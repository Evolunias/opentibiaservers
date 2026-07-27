import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-classick-drakoria-login');
}

export default function TopClassickDrakoriaLoginKeywordPage() {
  return <StaticKeywordPage slug="top-classick-drakoria-login" />;
}
