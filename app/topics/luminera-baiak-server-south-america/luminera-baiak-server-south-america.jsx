import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-baiak-server-south-america');
}

export default function LumineraBaiakServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="luminera-baiak-server-south-america" />;
}
