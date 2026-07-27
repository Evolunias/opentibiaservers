import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-10-0-evo-servers');
}

export default function Medivia100EvoServersKeywordPage() {
  return <StaticKeywordPage slug="medivia-10-0-evo-servers" />;
}
