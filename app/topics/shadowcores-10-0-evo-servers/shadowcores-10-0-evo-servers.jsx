import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-10-0-evo-servers');
}

export default function Shadowcores100EvoServersKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-10-0-evo-servers" />;
}
