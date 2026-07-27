import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-xanteria-ot');
}

export default function FreshStartXanteriaOtKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-xanteria-ot" />;
}
