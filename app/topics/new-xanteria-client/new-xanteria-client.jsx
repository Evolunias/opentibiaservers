import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-xanteria-client');
}

export default function NewXanteriaClientKeywordPage() {
  return <StaticKeywordPage slug="new-xanteria-client" />;
}
