import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-high-exp');
}

export default function MarolaotHighExpKeywordPage() {
  return <StaticKeywordPage slug="marolaot-high-exp" />;
}
