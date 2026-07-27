import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-alastera-login');
}

export default function FreshStartAlasteraLoginKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-alastera-login" />;
}
