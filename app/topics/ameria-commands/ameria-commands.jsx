import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-commands');
}

export default function AmeriaCommandsKeywordPage() {
  return <StaticKeywordPage slug="ameria-commands" />;
}
