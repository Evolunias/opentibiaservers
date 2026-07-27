import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-baiak-server-south-america');
}

export default function RealeraBaiakServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="realera-baiak-server-south-america" />;
}
