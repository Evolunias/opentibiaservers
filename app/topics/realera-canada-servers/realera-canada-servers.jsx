import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-canada-servers');
}

export default function RealeraCanadaServersKeywordPage() {
  return <StaticKeywordPage slug="realera-canada-servers" />;
}
