import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-xanteria-register');
}

export default function LowrateXanteriaRegisterKeywordPage() {
  return <StaticKeywordPage slug="lowrate-xanteria-register" />;
}
