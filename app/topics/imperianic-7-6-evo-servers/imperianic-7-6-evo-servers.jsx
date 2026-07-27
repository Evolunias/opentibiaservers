import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-7-6-evo-servers');
}

export default function Imperianic76EvoServersKeywordPage() {
  return <StaticKeywordPage slug="imperianic-7-6-evo-servers" />;
}
