import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-status');
}

export default function NtoStarStatusKeywordPage() {
  return <StaticKeywordPage slug="nto-star-status" />;
}
