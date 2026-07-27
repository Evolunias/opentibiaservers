import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-alastera-register');
}

export default function NewAlasteraRegisterKeywordPage() {
  return <StaticKeywordPage slug="new-alastera-register" />;
}
