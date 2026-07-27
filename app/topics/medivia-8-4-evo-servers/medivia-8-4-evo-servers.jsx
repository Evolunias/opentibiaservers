import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-8-4-evo-servers');
}

export default function Medivia84EvoServersKeywordPage() {
  return <StaticKeywordPage slug="medivia-8-4-evo-servers" />;
}
