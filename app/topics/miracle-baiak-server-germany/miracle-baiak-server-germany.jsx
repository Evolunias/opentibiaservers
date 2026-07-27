import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-baiak-server-germany');
}

export default function MiracleBaiakServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="miracle-baiak-server-germany" />;
}
