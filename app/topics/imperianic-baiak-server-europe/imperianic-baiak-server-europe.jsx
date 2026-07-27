import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-baiak-server-europe');
}

export default function ImperianicBaiakServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="imperianic-baiak-server-europe" />;
}
