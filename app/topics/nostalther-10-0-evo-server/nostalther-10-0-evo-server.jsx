import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-10-0-evo-server');
}

export default function Nostalther100EvoServerKeywordPage() {
  return <StaticKeywordPage slug="nostalther-10-0-evo-server" />;
}
