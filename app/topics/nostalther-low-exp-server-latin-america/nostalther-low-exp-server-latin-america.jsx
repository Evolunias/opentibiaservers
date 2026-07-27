import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-low-exp-server-latin-america');
}

export default function NostaltherLowExpServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="nostalther-low-exp-server-latin-america" />;
}
