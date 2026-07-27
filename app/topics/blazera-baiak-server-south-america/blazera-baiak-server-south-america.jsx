import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-baiak-server-south-america');
}

export default function BlazeraBaiakServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="blazera-baiak-server-south-america" />;
}
