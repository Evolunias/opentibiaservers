import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-europe-server');
}

export default function RealeraEuropeServerKeywordPage() {
  return <StaticKeywordPage slug="realera-europe-server" />;
}
