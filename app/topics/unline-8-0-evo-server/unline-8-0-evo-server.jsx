import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-8-0-evo-server');
}

export default function Unline80EvoServerKeywordPage() {
  return <StaticKeywordPage slug="unline-8-0-evo-server" />;
}
