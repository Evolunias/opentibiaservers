import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-10-0-evo-server');
}

export default function Blazera100EvoServerKeywordPage() {
  return <StaticKeywordPage slug="blazera-10-0-evo-server" />;
}
