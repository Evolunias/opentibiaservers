import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-low-exp-server-latin-america');
}

export default function DuraOnlineLowExpServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="dura-online-low-exp-server-latin-america" />;
}
