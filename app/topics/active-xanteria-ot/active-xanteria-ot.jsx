import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-xanteria-ot');
}

export default function ActiveXanteriaOtKeywordPage() {
  return <StaticKeywordPage slug="active-xanteria-ot" />;
}
