import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-14-evo-servers');
}

export default function Imperianic14EvoServersKeywordPage() {
  return <StaticKeywordPage slug="imperianic-14-evo-servers" />;
}
