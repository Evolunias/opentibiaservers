import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-10-0-evo-server');
}

export default function Luminera100EvoServerKeywordPage() {
  return <StaticKeywordPage slug="luminera-10-0-evo-server" />;
}
