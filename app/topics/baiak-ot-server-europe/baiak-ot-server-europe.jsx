import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ot-server-europe');
}

export default function BaiakOtServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="baiak-ot-server-europe" />;
}
