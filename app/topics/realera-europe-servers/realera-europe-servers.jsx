import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-europe-servers');
}

export default function RealeraEuropeServersKeywordPage() {
  return <StaticKeywordPage slug="realera-europe-servers" />;
}
