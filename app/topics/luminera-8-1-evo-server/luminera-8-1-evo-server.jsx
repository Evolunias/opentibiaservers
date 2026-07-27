import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-8-1-evo-server');
}

export default function Luminera81EvoServerKeywordPage() {
  return <StaticKeywordPage slug="luminera-8-1-evo-server" />;
}
