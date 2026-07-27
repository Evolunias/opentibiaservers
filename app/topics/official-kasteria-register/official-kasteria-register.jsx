import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-kasteria-register');
}

export default function OfficialKasteriaRegisterKeywordPage() {
  return <StaticKeywordPage slug="official-kasteria-register" />;
}
