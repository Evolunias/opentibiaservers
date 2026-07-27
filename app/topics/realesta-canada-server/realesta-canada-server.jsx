import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-canada-server');
}

export default function RealestaCanadaServerKeywordPage() {
  return <StaticKeywordPage slug="realesta-canada-server" />;
}
