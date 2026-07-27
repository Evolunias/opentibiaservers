import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-8-54-evo-server');
}

export default function Medivia854EvoServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-8-54-evo-server" />;
}
