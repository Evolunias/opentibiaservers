import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-ots');
}

export default function NtoStarOtsKeywordPage() {
  return <StaticKeywordPage slug="nto-star-ots" />;
}
