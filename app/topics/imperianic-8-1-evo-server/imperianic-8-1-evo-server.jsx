import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-8-1-evo-server');
}

export default function Imperianic81EvoServerKeywordPage() {
  return <StaticKeywordPage slug="imperianic-8-1-evo-server" />;
}
