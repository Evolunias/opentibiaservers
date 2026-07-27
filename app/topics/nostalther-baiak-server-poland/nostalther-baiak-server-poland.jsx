import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-baiak-server-poland');
}

export default function NostaltherBaiakServerPolandKeywordPage() {
  return <StaticKeywordPage slug="nostalther-baiak-server-poland" />;
}
