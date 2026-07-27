import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-baiak-server-usa');
}

export default function NostaltherBaiakServerUsaKeywordPage() {
  return <StaticKeywordPage slug="nostalther-baiak-server-usa" />;
}
