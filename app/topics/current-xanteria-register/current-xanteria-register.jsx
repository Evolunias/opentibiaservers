import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-xanteria-register');
}

export default function CurrentXanteriaRegisterKeywordPage() {
  return <StaticKeywordPage slug="current-xanteria-register" />;
}
