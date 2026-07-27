import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-kasteria-login');
}

export default function ActiveKasteriaLoginKeywordPage() {
  return <StaticKeywordPage slug="active-kasteria-login" />;
}
