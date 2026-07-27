import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-server-mexico');
}

export default function BaiakServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="baiak-server-mexico" />;
}
