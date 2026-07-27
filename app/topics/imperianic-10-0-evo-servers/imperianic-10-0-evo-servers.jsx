import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-10-0-evo-servers');
}

export default function Imperianic100EvoServersKeywordPage() {
  return <StaticKeywordPage slug="imperianic-10-0-evo-servers" />;
}
