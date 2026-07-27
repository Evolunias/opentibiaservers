import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-alastera-register');
}

export default function BestAlasteraRegisterKeywordPage() {
  return <StaticKeywordPage slug="best-alastera-register" />;
}
