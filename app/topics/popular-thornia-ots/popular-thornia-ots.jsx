import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-thornia-ots');
}

export default function PopularThorniaOtsKeywordPage() {
  return <StaticKeywordPage slug="popular-thornia-ots" />;
}
