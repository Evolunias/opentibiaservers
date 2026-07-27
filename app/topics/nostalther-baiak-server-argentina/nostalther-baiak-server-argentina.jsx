import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-baiak-server-argentina');
}

export default function NostaltherBaiakServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="nostalther-baiak-server-argentina" />;
}
