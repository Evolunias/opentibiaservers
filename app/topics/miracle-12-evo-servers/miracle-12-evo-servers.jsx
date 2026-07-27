import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-12-evo-servers');
}

export default function Miracle12EvoServersKeywordPage() {
  return <StaticKeywordPage slug="miracle-12-evo-servers" />;
}
