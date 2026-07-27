import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-10-0-evo-servers');
}

export default function Unline100EvoServersKeywordPage() {
  return <StaticKeywordPage slug="unline-10-0-evo-servers" />;
}
