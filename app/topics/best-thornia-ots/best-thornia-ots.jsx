import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-thornia-ots');
}

export default function BestThorniaOtsKeywordPage() {
  return <StaticKeywordPage slug="best-thornia-ots" />;
}
