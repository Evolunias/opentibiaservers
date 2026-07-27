import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-13-evo-server');
}

export default function Nostalther13EvoServerKeywordPage() {
  return <StaticKeywordPage slug="nostalther-13-evo-server" />;
}
