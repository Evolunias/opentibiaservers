import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-baiak-server-south-america');
}

export default function DuraOnlineBaiakServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="dura-online-baiak-server-south-america" />;
}
