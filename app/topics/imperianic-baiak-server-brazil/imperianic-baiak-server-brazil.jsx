import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-baiak-server-brazil');
}

export default function ImperianicBaiakServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="imperianic-baiak-server-brazil" />;
}
