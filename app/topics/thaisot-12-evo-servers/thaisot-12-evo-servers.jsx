import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-12-evo-servers');
}

export default function Thaisot12EvoServersKeywordPage() {
  return <StaticKeywordPage slug="thaisot-12-evo-servers" />;
}
