import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-germany-server');
}

export default function RealeraGermanyServerKeywordPage() {
  return <StaticKeywordPage slug="realera-germany-server" />;
}
