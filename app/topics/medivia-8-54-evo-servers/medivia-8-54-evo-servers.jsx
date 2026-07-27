import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-8-54-evo-servers');
}

export default function Medivia854EvoServersKeywordPage() {
  return <StaticKeywordPage slug="medivia-8-54-evo-servers" />;
}
