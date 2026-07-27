import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-14-evo-servers');
}

export default function Shadowcores14EvoServersKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-14-evo-servers" />;
}
