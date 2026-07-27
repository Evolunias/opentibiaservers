import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-europe-server');
}

export default function NostaltherEuropeServerKeywordPage() {
  return <StaticKeywordPage slug="nostalther-europe-server" />;
}
