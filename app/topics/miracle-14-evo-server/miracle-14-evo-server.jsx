import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-14-evo-server');
}

export default function Miracle14EvoServerKeywordPage() {
  return <StaticKeywordPage slug="miracle-14-evo-server" />;
}
