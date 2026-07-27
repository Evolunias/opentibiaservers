import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-12-evo-server');
}

export default function Nostalther12EvoServerKeywordPage() {
  return <StaticKeywordPage slug="nostalther-12-evo-server" />;
}
