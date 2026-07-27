import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-baiak-server-south-america');
}

export default function NilotBaiakServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="nilot-baiak-server-south-america" />;
}
