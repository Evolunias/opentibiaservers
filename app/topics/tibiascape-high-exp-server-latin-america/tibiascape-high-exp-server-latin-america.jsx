import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-high-exp-server-latin-america');
}

export default function TibiascapeHighExpServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-high-exp-server-latin-america" />;
}
