import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-low-exp-server-latin-america');
}

export default function ImperianicLowExpServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="imperianic-low-exp-server-latin-america" />;
}
