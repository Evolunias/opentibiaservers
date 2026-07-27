import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-status');
}

export default function AlasteraStatusKeywordPage() {
  return <StaticKeywordPage slug="alastera-status" />;
}
