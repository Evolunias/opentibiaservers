import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-baiak-server-uk');
}

export default function OxygenotBaiakServerUkKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-baiak-server-uk" />;
}
