import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ot-server-south-america');
}

export default function BaiakOtServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="baiak-ot-server-south-america" />;
}
