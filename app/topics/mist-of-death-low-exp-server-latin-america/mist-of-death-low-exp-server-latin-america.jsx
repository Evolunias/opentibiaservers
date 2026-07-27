import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-low-exp-server-latin-america');
}

export default function MistOfDeathLowExpServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-low-exp-server-latin-america" />;
}
