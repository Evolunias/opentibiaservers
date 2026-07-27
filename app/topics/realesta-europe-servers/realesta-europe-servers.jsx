import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-europe-servers');
}

export default function RealestaEuropeServersKeywordPage() {
  return <StaticKeywordPage slug="realesta-europe-servers" />;
}
