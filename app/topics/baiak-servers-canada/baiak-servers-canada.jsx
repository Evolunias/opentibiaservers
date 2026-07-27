import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-servers-canada');
}

export default function BaiakServersCanadaKeywordPage() {
  return <StaticKeywordPage slug="baiak-servers-canada" />;
}
