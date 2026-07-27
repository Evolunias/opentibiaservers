import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-baiak-server-mexico');
}

export default function NostaltherBaiakServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="nostalther-baiak-server-mexico" />;
}
