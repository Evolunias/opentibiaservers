import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-oldera-register');
}

export default function CustomOlderaRegisterKeywordPage() {
  return <StaticKeywordPage slug="custom-oldera-register" />;
}
