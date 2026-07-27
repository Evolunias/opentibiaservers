import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-low-exp-server-latin-america');
}

export default function TibianusLowExpServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibianus-low-exp-server-latin-america" />;
}
