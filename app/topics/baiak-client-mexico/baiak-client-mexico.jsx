import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-client-mexico');
}

export default function BaiakClientMexicoKeywordPage() {
  return <StaticKeywordPage slug="baiak-client-mexico" />;
}
