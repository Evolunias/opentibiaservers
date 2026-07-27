import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-7-4-evo-servers');
}

export default function Imperianic74EvoServersKeywordPage() {
  return <StaticKeywordPage slug="imperianic-7-4-evo-servers" />;
}
