import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-baiak-server-uk');
}

export default function ImperianicBaiakServerUkKeywordPage() {
  return <StaticKeywordPage slug="imperianic-baiak-server-uk" />;
}
