import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-7-72-evo-servers');
}

export default function Shadowcores772EvoServersKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-7-72-evo-servers" />;
}
