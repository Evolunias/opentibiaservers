import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-realesta-login');
}

export default function CustomRealestaLoginKeywordPage() {
  return <StaticKeywordPage slug="custom-realesta-login" />;
}
