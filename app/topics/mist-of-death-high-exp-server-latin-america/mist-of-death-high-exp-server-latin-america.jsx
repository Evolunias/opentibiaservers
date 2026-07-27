import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-high-exp-server-latin-america');
}

export default function MistOfDeathHighExpServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-high-exp-server-latin-america" />;
}
