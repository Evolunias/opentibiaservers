import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-baiak-server-mexico');
}

export default function OlderaBaiakServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="oldera-baiak-server-mexico" />;
}
