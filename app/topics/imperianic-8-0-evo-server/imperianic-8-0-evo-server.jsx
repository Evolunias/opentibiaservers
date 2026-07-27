import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-8-0-evo-server');
}

export default function Imperianic80EvoServerKeywordPage() {
  return <StaticKeywordPage slug="imperianic-8-0-evo-server" />;
}
