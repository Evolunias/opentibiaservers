import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-14-evo-server');
}

export default function Luminera14EvoServerKeywordPage() {
  return <StaticKeywordPage slug="luminera-14-evo-server" />;
}
