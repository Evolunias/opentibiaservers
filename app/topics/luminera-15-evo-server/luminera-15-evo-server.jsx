import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-15-evo-server');
}

export default function Luminera15EvoServerKeywordPage() {
  return <StaticKeywordPage slug="luminera-15-evo-server" />;
}
