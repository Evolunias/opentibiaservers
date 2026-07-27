import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-baiak-server-mexico');
}

export default function ImperianicBaiakServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="imperianic-baiak-server-mexico" />;
}
