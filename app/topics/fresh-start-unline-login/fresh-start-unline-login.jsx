import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-unline-login');
}

export default function FreshStartUnlineLoginKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-unline-login" />;
}
