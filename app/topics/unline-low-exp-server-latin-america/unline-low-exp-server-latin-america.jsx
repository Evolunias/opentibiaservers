import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-low-exp-server-latin-america');
}

export default function UnlineLowExpServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="unline-low-exp-server-latin-america" />;
}
