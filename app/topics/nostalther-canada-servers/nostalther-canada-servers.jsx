import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-canada-servers');
}

export default function NostaltherCanadaServersKeywordPage() {
  return <StaticKeywordPage slug="nostalther-canada-servers" />;
}
