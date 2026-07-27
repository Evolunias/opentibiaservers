import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ot-server-poland');
}

export default function BaiakOtServerPolandKeywordPage() {
  return <StaticKeywordPage slug="baiak-ot-server-poland" />;
}
