import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-marolaot-register');
}

export default function CustomMarolaotRegisterKeywordPage() {
  return <StaticKeywordPage slug="custom-marolaot-register" />;
}
