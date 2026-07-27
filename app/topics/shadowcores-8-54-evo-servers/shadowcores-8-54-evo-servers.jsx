import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-8-54-evo-servers');
}

export default function Shadowcores854EvoServersKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-8-54-evo-servers" />;
}
