import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-baiak-server-south-america');
}

export default function UnlineBaiakServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="unline-baiak-server-south-america" />;
}
