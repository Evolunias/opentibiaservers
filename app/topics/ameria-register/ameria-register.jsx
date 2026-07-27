import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-register');
}

export default function AmeriaRegisterKeywordPage() {
  return <StaticKeywordPage slug="ameria-register" />;
}
