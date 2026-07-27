import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-high-exp');
}

export default function NtoStarHighExpKeywordPage() {
  return <StaticKeywordPage slug="nto-star-high-exp" />;
}
