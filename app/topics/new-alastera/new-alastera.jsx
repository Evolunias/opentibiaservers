import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-alastera');
}

export default function NewAlasteraKeywordPage() {
  return <StaticKeywordPage slug="new-alastera" />;
}
