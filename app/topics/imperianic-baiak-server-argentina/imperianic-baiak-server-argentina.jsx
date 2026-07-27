import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-baiak-server-argentina');
}

export default function ImperianicBaiakServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="imperianic-baiak-server-argentina" />;
}
