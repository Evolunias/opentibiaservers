import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-canada-server');
}

export default function RealeraCanadaServerKeywordPage() {
  return <StaticKeywordPage slug="realera-canada-server" />;
}
