import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-alastera-login');
}

export default function NewAlasteraLoginKeywordPage() {
  return <StaticKeywordPage slug="new-alastera-login" />;
}
