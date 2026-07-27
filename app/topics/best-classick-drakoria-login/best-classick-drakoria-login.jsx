import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-classick-drakoria-login');
}

export default function BestClassickDrakoriaLoginKeywordPage() {
  return <StaticKeywordPage slug="best-classick-drakoria-login" />;
}
