import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-baiak-server-poland');
}

export default function OxygenotBaiakServerPolandKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-baiak-server-poland" />;
}
