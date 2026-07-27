import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-7-4-evo-server');
}

export default function Luminera74EvoServerKeywordPage() {
  return <StaticKeywordPage slug="luminera-7-4-evo-server" />;
}
