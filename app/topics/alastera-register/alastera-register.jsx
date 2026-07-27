import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-register');
}

export default function AlasteraRegisterKeywordPage() {
  return <StaticKeywordPage slug="alastera-register" />;
}
