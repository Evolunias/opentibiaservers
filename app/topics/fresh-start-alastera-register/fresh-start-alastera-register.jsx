import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-alastera-register');
}

export default function FreshStartAlasteraRegisterKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-alastera-register" />;
}
