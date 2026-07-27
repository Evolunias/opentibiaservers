import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-thornia-register');
}

export default function OfficialThorniaRegisterKeywordPage() {
  return <StaticKeywordPage slug="official-thornia-register" />;
}
