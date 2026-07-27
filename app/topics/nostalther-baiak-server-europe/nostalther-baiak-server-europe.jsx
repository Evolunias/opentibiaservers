import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-baiak-server-europe');
}

export default function NostaltherBaiakServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="nostalther-baiak-server-europe" />;
}
