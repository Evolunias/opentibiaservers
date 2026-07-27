import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-kasteria-client');
}

export default function ActiveKasteriaClientKeywordPage() {
  return <StaticKeywordPage slug="active-kasteria-client" />;
}
