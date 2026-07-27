import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-nilot-register');
}

export default function CustomNilotRegisterKeywordPage() {
  return <StaticKeywordPage slug="custom-nilot-register" />;
}
