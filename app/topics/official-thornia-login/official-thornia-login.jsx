import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-thornia-login');
}

export default function OfficialThorniaLoginKeywordPage() {
  return <StaticKeywordPage slug="official-thornia-login" />;
}
