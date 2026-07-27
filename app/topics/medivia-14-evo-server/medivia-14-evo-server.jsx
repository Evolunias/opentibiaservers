import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-14-evo-server');
}

export default function Medivia14EvoServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-14-evo-server" />;
}
