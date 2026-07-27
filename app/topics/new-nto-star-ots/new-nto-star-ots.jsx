import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-nto-star-ots');
}

export default function NewNtoStarOtsKeywordPage() {
  return <StaticKeywordPage slug="new-nto-star-ots" />;
}
