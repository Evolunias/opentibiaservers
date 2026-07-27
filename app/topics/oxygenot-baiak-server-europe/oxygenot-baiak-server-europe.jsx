import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-baiak-server-europe');
}

export default function OxygenotBaiakServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-baiak-server-europe" />;
}
