import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-7-6-evo-server');
}

export default function Luminera76EvoServerKeywordPage() {
  return <StaticKeywordPage slug="luminera-7-6-evo-server" />;
}
