import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-kasteria-server');
}

export default function ActiveKasteriaServerKeywordPage() {
  return <StaticKeywordPage slug="active-kasteria-server" />;
}
