import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-baiak-server-brazil');
}

export default function NostaltherBaiakServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="nostalther-baiak-server-brazil" />;
}
