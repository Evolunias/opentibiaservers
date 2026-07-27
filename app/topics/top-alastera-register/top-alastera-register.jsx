import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-alastera-register');
}

export default function TopAlasteraRegisterKeywordPage() {
  return <StaticKeywordPage slug="top-alastera-register" />;
}
