import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-thornia');
}

export default function BestThorniaKeywordPage() {
  return <StaticKeywordPage slug="best-thornia" />;
}
