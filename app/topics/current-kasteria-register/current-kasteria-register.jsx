import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-kasteria-register');
}

export default function CurrentKasteriaRegisterKeywordPage() {
  return <StaticKeywordPage slug="current-kasteria-register" />;
}
