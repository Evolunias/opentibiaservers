import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-10-98-evo-servers');
}

export default function Medivia1098EvoServersKeywordPage() {
  return <StaticKeywordPage slug="medivia-10-98-evo-servers" />;
}
