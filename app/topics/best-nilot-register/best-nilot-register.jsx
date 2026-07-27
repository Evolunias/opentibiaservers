import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-nilot-register');
}

export default function BestNilotRegisterKeywordPage() {
  return <StaticKeywordPage slug="best-nilot-register" />;
}
