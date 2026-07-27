import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-high-exp-server-latin-america');
}

export default function OxygenotHighExpServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-high-exp-server-latin-america" />;
}
