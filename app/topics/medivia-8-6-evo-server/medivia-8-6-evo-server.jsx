import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-8-6-evo-server');
}

export default function Medivia86EvoServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-8-6-evo-server" />;
}
