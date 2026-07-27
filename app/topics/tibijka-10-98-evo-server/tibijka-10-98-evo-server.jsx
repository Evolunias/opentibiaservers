import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-10-98-evo-server');
}

export default function Tibijka1098EvoServerKeywordPage() {
  return <StaticKeywordPage slug="tibijka-10-98-evo-server" />;
}
