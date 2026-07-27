import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-low-exp-server-latin-america');
}

export default function TibiascapeLowExpServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-low-exp-server-latin-america" />;
}
