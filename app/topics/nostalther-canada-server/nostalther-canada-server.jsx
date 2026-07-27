import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-canada-server');
}

export default function NostaltherCanadaServerKeywordPage() {
  return <StaticKeywordPage slug="nostalther-canada-server" />;
}
