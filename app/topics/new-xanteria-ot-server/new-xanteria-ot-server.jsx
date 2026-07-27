import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-xanteria-ot-server');
}

export default function NewXanteriaOtServerKeywordPage() {
  return <StaticKeywordPage slug="new-xanteria-ot-server" />;
}
