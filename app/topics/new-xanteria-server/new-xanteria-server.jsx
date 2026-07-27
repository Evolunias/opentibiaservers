import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-xanteria-server');
}

export default function NewXanteriaServerKeywordPage() {
  return <StaticKeywordPage slug="new-xanteria-server" />;
}
