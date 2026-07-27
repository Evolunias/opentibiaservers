import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-unline-login');
}

export default function ActiveUnlineLoginKeywordPage() {
  return <StaticKeywordPage slug="active-unline-login" />;
}
