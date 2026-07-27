import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-unline-login');
}

export default function NewUnlineLoginKeywordPage() {
  return <StaticKeywordPage slug="new-unline-login" />;
}
