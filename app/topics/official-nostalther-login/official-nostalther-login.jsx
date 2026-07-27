import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-nostalther-login');
}

export default function OfficialNostaltherLoginKeywordPage() {
  return <StaticKeywordPage slug="official-nostalther-login" />;
}
