import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-10-0-evo-server');
}

export default function Tibijka100EvoServerKeywordPage() {
  return <StaticKeywordPage slug="tibijka-10-0-evo-server" />;
}
