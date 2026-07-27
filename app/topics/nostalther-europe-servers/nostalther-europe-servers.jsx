import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-europe-servers');
}

export default function NostaltherEuropeServersKeywordPage() {
  return <StaticKeywordPage slug="nostalther-europe-servers" />;
}
