import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ot-server-list-europe');
}

export default function OtServerListEuropeKeywordPage() {
  return <StaticKeywordPage slug="ot-server-list-europe" />;
}
