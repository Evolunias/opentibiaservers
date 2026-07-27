import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-baiak-server-germany');
}

export default function OxygenotBaiakServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-baiak-server-germany" />;
}
