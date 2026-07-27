import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-low-exp-server-latin-america');
}

export default function LumineraLowExpServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="luminera-low-exp-server-latin-america" />;
}
