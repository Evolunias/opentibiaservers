import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-status');
}

export default function MarolaotStatusKeywordPage() {
  return <StaticKeywordPage slug="marolaot-status" />;
}
