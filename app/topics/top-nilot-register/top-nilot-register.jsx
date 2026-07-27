import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-nilot-register');
}

export default function TopNilotRegisterKeywordPage() {
  return <StaticKeywordPage slug="top-nilot-register" />;
}
