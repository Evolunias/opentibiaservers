import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-baiak-server-germany');
}

export default function NepreniaBaiakServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="neprenia-baiak-server-germany" />;
}
