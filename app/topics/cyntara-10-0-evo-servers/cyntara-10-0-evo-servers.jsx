import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-10-0-evo-servers');
}

export default function Cyntara100EvoServersKeywordPage() {
  return <StaticKeywordPage slug="cyntara-10-0-evo-servers" />;
}
