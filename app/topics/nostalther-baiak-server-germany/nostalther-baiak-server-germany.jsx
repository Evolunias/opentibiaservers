import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-baiak-server-germany');
}

export default function NostaltherBaiakServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="nostalther-baiak-server-germany" />;
}
