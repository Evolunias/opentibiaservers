import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-kasteria-server');
}

export default function CustomKasteriaServerKeywordPage() {
  return <StaticKeywordPage slug="custom-kasteria-server" />;
}
