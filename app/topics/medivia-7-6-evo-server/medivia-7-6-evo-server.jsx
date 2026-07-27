import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-7-6-evo-server');
}

export default function Medivia76EvoServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-7-6-evo-server" />;
}
