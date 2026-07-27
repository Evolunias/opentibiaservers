import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-low-exp-server-latin-america');
}

export default function MediviaLowExpServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="medivia-low-exp-server-latin-america" />;
}
