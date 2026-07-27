import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-11-evo-server');
}

export default function Luminera11EvoServerKeywordPage() {
  return <StaticKeywordPage slug="luminera-11-evo-server" />;
}
