import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-xanteria-ots');
}

export default function NewXanteriaOtsKeywordPage() {
  return <StaticKeywordPage slug="new-xanteria-ots" />;
}
