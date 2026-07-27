import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-low-exp-server-latin-america');
}

export default function OlderaLowExpServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="oldera-low-exp-server-latin-america" />;
}
