import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-12-evo-server');
}

export default function Imperianic12EvoServerKeywordPage() {
  return <StaticKeywordPage slug="imperianic-12-evo-server" />;
}
