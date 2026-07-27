import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-ots');
}

export default function AlasteraOtsKeywordPage() {
  return <StaticKeywordPage slug="alastera-ots" />;
}
