import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-nilot-register');
}

export default function NewNilotRegisterKeywordPage() {
  return <StaticKeywordPage slug="new-nilot-register" />;
}
