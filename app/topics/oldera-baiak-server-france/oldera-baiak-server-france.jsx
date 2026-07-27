import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-baiak-server-france');
}

export default function OlderaBaiakServerFranceKeywordPage() {
  return <StaticKeywordPage slug="oldera-baiak-server-france" />;
}
