import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-baiak-server-south-america');
}

export default function OxygenotBaiakServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-baiak-server-south-america" />;
}
