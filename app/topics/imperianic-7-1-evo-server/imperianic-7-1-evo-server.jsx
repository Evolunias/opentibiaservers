import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-7-1-evo-server');
}

export default function Imperianic71EvoServerKeywordPage() {
  return <StaticKeywordPage slug="imperianic-7-1-evo-server" />;
}
