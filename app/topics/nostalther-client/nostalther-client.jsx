import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-client');
}

export default function NostaltherClientKeywordPage() {
  return <StaticKeywordPage slug="nostalther-client" />;
}
