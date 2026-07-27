import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-servers-mexico');
}

export default function BaiakServersMexicoKeywordPage() {
  return <StaticKeywordPage slug="baiak-servers-mexico" />;
}
