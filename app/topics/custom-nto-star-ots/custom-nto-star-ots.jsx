import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-nto-star-ots');
}

export default function CustomNtoStarOtsKeywordPage() {
  return <StaticKeywordPage slug="custom-nto-star-ots" />;
}
