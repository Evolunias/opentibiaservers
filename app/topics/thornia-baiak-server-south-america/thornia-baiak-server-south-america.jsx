import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-baiak-server-south-america');
}

export default function ThorniaBaiakServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="thornia-baiak-server-south-america" />;
}
