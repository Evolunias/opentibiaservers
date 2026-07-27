import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-south-america-servers');
}

export default function TibiantisSouthAmericaServersKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-south-america-servers" />;
}
