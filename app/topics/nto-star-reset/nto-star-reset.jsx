import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-reset');
}

export default function NtoStarResetKeywordPage() {
  return <StaticKeywordPage slug="nto-star-reset" />;
}
