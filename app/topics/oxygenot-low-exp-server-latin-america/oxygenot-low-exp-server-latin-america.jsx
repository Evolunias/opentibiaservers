import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-low-exp-server-latin-america');
}

export default function OxygenotLowExpServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-low-exp-server-latin-america" />;
}
