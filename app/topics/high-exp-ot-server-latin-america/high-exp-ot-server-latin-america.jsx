import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-ot-server-latin-america');
}

export default function HighExpOtServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="high-exp-ot-server-latin-america" />;
}
