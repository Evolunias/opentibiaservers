import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-unline-register');
}

export default function FreshStartUnlineRegisterKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-unline-register" />;
}
