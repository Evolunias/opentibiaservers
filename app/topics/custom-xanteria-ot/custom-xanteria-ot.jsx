import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-xanteria-ot');
}

export default function CustomXanteriaOtKeywordPage() {
  return <StaticKeywordPage slug="custom-xanteria-ot" />;
}
