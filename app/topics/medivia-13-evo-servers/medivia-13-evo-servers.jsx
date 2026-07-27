import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-13-evo-servers');
}

export default function Medivia13EvoServersKeywordPage() {
  return <StaticKeywordPage slug="medivia-13-evo-servers" />;
}
