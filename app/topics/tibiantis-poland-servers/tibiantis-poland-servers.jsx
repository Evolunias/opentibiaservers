import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-poland-servers');
}

export default function TibiantisPolandServersKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-poland-servers" />;
}
