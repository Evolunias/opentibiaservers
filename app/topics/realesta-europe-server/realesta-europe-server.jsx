import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-europe-server');
}

export default function RealestaEuropeServerKeywordPage() {
  return <StaticKeywordPage slug="realesta-europe-server" />;
}
