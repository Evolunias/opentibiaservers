import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-xanteria-ot');
}

export default function TopXanteriaOtKeywordPage() {
  return <StaticKeywordPage slug="top-xanteria-ot" />;
}
