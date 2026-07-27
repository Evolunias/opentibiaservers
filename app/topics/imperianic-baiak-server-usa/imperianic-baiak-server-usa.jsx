import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-baiak-server-usa');
}

export default function ImperianicBaiakServerUsaKeywordPage() {
  return <StaticKeywordPage slug="imperianic-baiak-server-usa" />;
}
