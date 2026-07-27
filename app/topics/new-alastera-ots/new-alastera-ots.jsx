import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-alastera-ots');
}

export default function NewAlasteraOtsKeywordPage() {
  return <StaticKeywordPage slug="new-alastera-ots" />;
}
