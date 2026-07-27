import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-login');
}

export default function AlasteraLoginKeywordPage() {
  return <StaticKeywordPage slug="alastera-login" />;
}
