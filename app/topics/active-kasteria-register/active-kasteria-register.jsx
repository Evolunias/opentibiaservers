import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-kasteria-register');
}

export default function ActiveKasteriaRegisterKeywordPage() {
  return <StaticKeywordPage slug="active-kasteria-register" />;
}
