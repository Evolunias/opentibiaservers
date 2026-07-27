import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-nilot-register');
}

export default function ActiveNilotRegisterKeywordPage() {
  return <StaticKeywordPage slug="active-nilot-register" />;
}
