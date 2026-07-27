import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-low-exp-server-latin-america');
}

export default function RealeraLowExpServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="realera-low-exp-server-latin-america" />;
}
