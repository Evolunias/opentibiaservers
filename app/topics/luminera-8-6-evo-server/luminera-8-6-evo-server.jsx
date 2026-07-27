import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-8-6-evo-server');
}

export default function Luminera86EvoServerKeywordPage() {
  return <StaticKeywordPage slug="luminera-8-6-evo-server" />;
}
