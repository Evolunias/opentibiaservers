import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-nostalther-register');
}

export default function OfficialNostaltherRegisterKeywordPage() {
  return <StaticKeywordPage slug="official-nostalther-register" />;
}
