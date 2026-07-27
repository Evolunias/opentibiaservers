import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-7-72-evo-servers');
}

export default function Medivia772EvoServersKeywordPage() {
  return <StaticKeywordPage slug="medivia-7-72-evo-servers" />;
}
