import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ot-server-uk');
}

export default function BaiakOtServerUkKeywordPage() {
  return <StaticKeywordPage slug="baiak-ot-server-uk" />;
}
