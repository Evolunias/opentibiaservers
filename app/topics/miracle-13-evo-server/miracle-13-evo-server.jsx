import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-13-evo-server');
}

export default function Miracle13EvoServerKeywordPage() {
  return <StaticKeywordPage slug="miracle-13-evo-server" />;
}
