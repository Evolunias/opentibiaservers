import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-france-server');
}

export default function OlderaFranceServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-france-server" />;
}
