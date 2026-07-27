import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-baiak-server-europe');
}

export default function InfernalOtBaiakServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-baiak-server-europe" />;
}
