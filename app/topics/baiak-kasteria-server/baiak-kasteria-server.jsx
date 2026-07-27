import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-kasteria-server');
}

export default function BaiakKasteriaServerKeywordPage() {
  return <StaticKeywordPage slug="baiak-kasteria-server" />;
}
