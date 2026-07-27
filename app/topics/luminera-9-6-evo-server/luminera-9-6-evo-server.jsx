import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-9-6-evo-server');
}

export default function Luminera96EvoServerKeywordPage() {
  return <StaticKeywordPage slug="luminera-9-6-evo-server" />;
}
