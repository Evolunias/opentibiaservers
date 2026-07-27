import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-xanteria-private-server');
}

export default function NewXanteriaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="new-xanteria-private-server" />;
}
