import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-13-evo-servers');
}

export default function Miracle13EvoServersKeywordPage() {
  return <StaticKeywordPage slug="miracle-13-evo-servers" />;
}
