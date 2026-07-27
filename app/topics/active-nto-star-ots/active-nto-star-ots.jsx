import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-nto-star-ots');
}

export default function ActiveNtoStarOtsKeywordPage() {
  return <StaticKeywordPage slug="active-nto-star-ots" />;
}
