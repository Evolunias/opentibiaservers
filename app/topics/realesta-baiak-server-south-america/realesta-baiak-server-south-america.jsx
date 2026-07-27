import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-baiak-server-south-america');
}

export default function RealestaBaiakServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="realesta-baiak-server-south-america" />;
}
