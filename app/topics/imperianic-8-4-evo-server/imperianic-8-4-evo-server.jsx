import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-8-4-evo-server');
}

export default function Imperianic84EvoServerKeywordPage() {
  return <StaticKeywordPage slug="imperianic-8-4-evo-server" />;
}
