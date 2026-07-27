import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-baiak-server-poland');
}

export default function InfernalOtBaiakServerPolandKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-baiak-server-poland" />;
}
