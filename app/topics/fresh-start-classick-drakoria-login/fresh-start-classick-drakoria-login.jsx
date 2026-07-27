import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-classick-drakoria-login');
}

export default function FreshStartClassickDrakoriaLoginKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-classick-drakoria-login" />;
}
