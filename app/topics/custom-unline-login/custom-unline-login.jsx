import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-unline-login');
}

export default function CustomUnlineLoginKeywordPage() {
  return <StaticKeywordPage slug="custom-unline-login" />;
}
