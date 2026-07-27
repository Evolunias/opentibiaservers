import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-xanteria-register');
}

export default function HighrateXanteriaRegisterKeywordPage() {
  return <StaticKeywordPage slug="highrate-xanteria-register" />;
}
