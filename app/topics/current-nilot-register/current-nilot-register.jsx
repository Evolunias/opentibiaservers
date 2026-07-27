import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-nilot-register');
}

export default function CurrentNilotRegisterKeywordPage() {
  return <StaticKeywordPage slug="current-nilot-register" />;
}
