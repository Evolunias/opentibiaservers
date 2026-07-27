import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-low-exp-server-latin-america');
}

export default function RealestaLowExpServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="realesta-low-exp-server-latin-america" />;
}
