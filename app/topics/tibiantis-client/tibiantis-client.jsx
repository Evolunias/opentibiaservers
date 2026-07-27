import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-client');
}

export default function TibiantisClientKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-client" />;
}
