import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-13-evo-servers');
}

export default function Shadowcores13EvoServersKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-13-evo-servers" />;
}
