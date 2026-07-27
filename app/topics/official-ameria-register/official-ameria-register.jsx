import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-ameria-register');
}

export default function OfficialAmeriaRegisterKeywordPage() {
  return <StaticKeywordPage slug="official-ameria-register" />;
}
