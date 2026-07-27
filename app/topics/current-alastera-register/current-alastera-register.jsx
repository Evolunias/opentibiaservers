import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-alastera-register');
}

export default function CurrentAlasteraRegisterKeywordPage() {
  return <StaticKeywordPage slug="current-alastera-register" />;
}
