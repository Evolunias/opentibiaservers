import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-kasteria-register');
}

export default function TopKasteriaRegisterKeywordPage() {
  return <StaticKeywordPage slug="top-kasteria-register" />;
}
