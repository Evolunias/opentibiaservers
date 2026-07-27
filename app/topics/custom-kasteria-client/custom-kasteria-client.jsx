import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-kasteria-client');
}

export default function CustomKasteriaClientKeywordPage() {
  return <StaticKeywordPage slug="custom-kasteria-client" />;
}
