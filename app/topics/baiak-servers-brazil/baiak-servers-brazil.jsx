import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-servers-brazil');
}

export default function BaiakServersBrazilKeywordPage() {
  return <StaticKeywordPage slug="baiak-servers-brazil" />;
}
