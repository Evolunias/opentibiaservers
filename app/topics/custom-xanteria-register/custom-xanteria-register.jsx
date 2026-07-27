import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-xanteria-register');
}

export default function CustomXanteriaRegisterKeywordPage() {
  return <StaticKeywordPage slug="custom-xanteria-register" />;
}
