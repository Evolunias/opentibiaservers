import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-8-4-evo-server');
}

export default function Medivia84EvoServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-8-4-evo-server" />;
}
