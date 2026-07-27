import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-baiak-server-north-america');
}

export default function NostaltherBaiakServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="nostalther-baiak-server-north-america" />;
}
