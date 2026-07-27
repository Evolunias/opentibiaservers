import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-alastera-register');
}

export default function ActiveAlasteraRegisterKeywordPage() {
  return <StaticKeywordPage slug="active-alastera-register" />;
}
