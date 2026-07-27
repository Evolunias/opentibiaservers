import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-kasteria-register');
}

export default function BestKasteriaRegisterKeywordPage() {
  return <StaticKeywordPage slug="best-kasteria-register" />;
}
