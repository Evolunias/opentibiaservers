import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-nilot-register');
}

export default function OfficialNilotRegisterKeywordPage() {
  return <StaticKeywordPage slug="official-nilot-register" />;
}
