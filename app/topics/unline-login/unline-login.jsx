import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-login');
}

export default function UnlineLoginKeywordPage() {
  return <StaticKeywordPage slug="unline-login" />;
}
