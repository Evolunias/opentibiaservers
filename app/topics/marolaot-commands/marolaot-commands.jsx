import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-commands');
}

export default function MarolaotCommandsKeywordPage() {
  return <StaticKeywordPage slug="marolaot-commands" />;
}
