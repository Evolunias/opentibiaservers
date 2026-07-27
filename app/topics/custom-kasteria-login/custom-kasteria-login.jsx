import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-kasteria-login');
}

export default function CustomKasteriaLoginKeywordPage() {
  return <StaticKeywordPage slug="custom-kasteria-login" />;
}
