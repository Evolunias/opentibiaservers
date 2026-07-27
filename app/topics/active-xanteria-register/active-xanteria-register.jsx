import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-xanteria-register');
}

export default function ActiveXanteriaRegisterKeywordPage() {
  return <StaticKeywordPage slug="active-xanteria-register" />;
}
