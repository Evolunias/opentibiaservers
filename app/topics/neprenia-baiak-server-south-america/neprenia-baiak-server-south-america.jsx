import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-baiak-server-south-america');
}

export default function NepreniaBaiakServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="neprenia-baiak-server-south-america" />;
}
