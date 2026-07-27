import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-7-4-evo-servers');
}

export default function Medivia74EvoServersKeywordPage() {
  return <StaticKeywordPage slug="medivia-7-4-evo-servers" />;
}
