import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-servers-south-america');
}

export default function BaiakServersSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="baiak-servers-south-america" />;
}
