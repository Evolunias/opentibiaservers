import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-canada-servers');
}

export default function RealestaCanadaServersKeywordPage() {
  return <StaticKeywordPage slug="realesta-canada-servers" />;
}
