import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-high-exp-server-latin-america');
}

export default function NostaltherHighExpServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="nostalther-high-exp-server-latin-america" />;
}
