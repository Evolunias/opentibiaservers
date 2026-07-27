import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-high-exp-server-latin-america');
}

export default function MediviaHighExpServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="medivia-high-exp-server-latin-america" />;
}
