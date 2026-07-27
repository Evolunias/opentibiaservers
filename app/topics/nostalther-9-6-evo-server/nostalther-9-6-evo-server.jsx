import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-9-6-evo-server');
}

export default function Nostalther96EvoServerKeywordPage() {
  return <StaticKeywordPage slug="nostalther-9-6-evo-server" />;
}
