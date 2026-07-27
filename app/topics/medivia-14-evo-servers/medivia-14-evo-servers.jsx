import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-14-evo-servers');
}

export default function Medivia14EvoServersKeywordPage() {
  return <StaticKeywordPage slug="medivia-14-evo-servers" />;
}
