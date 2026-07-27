import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-xanteria-ot');
}

export default function PopularXanteriaOtKeywordPage() {
  return <StaticKeywordPage slug="popular-xanteria-ot" />;
}
