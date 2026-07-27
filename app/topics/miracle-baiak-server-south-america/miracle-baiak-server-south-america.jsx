import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-baiak-server-south-america');
}

export default function MiracleBaiakServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="miracle-baiak-server-south-america" />;
}
