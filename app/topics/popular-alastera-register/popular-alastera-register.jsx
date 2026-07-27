import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-alastera-register');
}

export default function PopularAlasteraRegisterKeywordPage() {
  return <StaticKeywordPage slug="popular-alastera-register" />;
}
