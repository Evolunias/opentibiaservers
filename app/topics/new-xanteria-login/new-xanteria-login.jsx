import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-xanteria-login');
}

export default function NewXanteriaLoginKeywordPage() {
  return <StaticKeywordPage slug="new-xanteria-login" />;
}
