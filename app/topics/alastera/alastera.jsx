import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera');
}

export default function AlasteraKeywordPage() {
  return <StaticKeywordPage slug="alastera" />;
}
