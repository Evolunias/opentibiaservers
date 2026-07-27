import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-thornia-ot');
}

export default function PopularThorniaOtKeywordPage() {
  return <StaticKeywordPage slug="popular-thornia-ot" />;
}
