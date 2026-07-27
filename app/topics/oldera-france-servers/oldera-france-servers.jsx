import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-france-servers');
}

export default function OlderaFranceServersKeywordPage() {
  return <StaticKeywordPage slug="oldera-france-servers" />;
}
