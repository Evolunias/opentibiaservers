import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-xanteria-ot');
}

export default function NewXanteriaOtKeywordPage() {
  return <StaticKeywordPage slug="new-xanteria-ot" />;
}
