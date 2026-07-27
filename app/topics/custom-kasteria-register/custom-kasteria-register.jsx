import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-kasteria-register');
}

export default function CustomKasteriaRegisterKeywordPage() {
  return <StaticKeywordPage slug="custom-kasteria-register" />;
}
