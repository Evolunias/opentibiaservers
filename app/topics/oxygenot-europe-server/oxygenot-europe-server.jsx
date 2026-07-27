import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-europe-server');
}

export default function OxygenotEuropeServerKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-europe-server" />;
}
