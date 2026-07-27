import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-8-4-evo-servers');
}

export default function Imperianic84EvoServersKeywordPage() {
  return <StaticKeywordPage slug="imperianic-8-4-evo-servers" />;
}
