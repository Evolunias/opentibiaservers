import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-nilot-login');
}

export default function OfficialNilotLoginKeywordPage() {
  return <StaticKeywordPage slug="official-nilot-login" />;
}
