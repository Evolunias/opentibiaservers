import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-alastera-register');
}

export default function CustomAlasteraRegisterKeywordPage() {
  return <StaticKeywordPage slug="custom-alastera-register" />;
}
