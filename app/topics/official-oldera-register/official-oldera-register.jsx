import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-oldera-register');
}

export default function OfficialOlderaRegisterKeywordPage() {
  return <StaticKeywordPage slug="official-oldera-register" />;
}
