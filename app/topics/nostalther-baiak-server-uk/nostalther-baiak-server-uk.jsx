import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-baiak-server-uk');
}

export default function NostaltherBaiakServerUkKeywordPage() {
  return <StaticKeywordPage slug="nostalther-baiak-server-uk" />;
}
