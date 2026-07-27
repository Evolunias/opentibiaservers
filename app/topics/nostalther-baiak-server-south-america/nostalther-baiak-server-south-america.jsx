import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-baiak-server-south-america');
}

export default function NostaltherBaiakServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="nostalther-baiak-server-south-america" />;
}
