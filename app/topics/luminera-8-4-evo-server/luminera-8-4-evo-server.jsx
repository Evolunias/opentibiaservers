import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-8-4-evo-server');
}

export default function Luminera84EvoServerKeywordPage() {
  return <StaticKeywordPage slug="luminera-8-4-evo-server" />;
}
